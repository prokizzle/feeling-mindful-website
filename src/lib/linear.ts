let oauthToken: { value: string; expiresAt: number } | undefined

async function getAuthorization() {
  if (process.env.LINEAR_API_KEY) return process.env.LINEAR_API_KEY
  if (oauthToken && oauthToken.expiresAt > Date.now() + 60_000) {
    return `Bearer ${oauthToken.value}`
  }

  const clientId = process.env.LINEAR_CLIENT_ID
  const clientSecret = process.env.LINEAR_CLIENT_SECRET
  if (!clientId || !clientSecret) throw new Error('Linear is not configured')

  const response = await fetch('https://api.linear.app/oauth/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'read,issues:create,comments:create',
    }),
    cache: 'no-store',
  })
  const result = (await response.json()) as {
    access_token?: string
    expires_in?: number
  }
  if (!response.ok || !result.access_token) {
    throw new Error('Linear OAuth failed')
  }

  oauthToken = {
    value: result.access_token,
    expiresAt: Date.now() + (result.expires_in ?? 3600) * 1000,
  }
  return `Bearer ${oauthToken.value}`
}

export async function linearRequest<T>(
  query: string,
  variables: Record<string, unknown>,
  retry = true,
): Promise<T> {
  const response = await fetch('https://api.linear.app/graphql', {
    method: 'POST',
    headers: {
      Authorization: await getAuthorization(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  })

  if (response.status === 401 && retry && !process.env.LINEAR_API_KEY) {
    oauthToken = undefined
    return linearRequest<T>(query, variables, false)
  }

  const result = (await response.json()) as {
    data?: T
    errors?: { message: string }[]
  }
  if (!response.ok || result.errors?.length || !result.data) {
    throw new Error(result.errors?.[0]?.message ?? 'Linear request failed')
  }
  return result.data
}

export type SupportIssue = {
  id: string
  identifier: string
  title: string
  description: string | null
  comments: { nodes: { body: string; createdAt: string }[] }
}

export async function getSupportIssue(issueId: string) {
  const result = await linearRequest<{ issue: SupportIssue | null }>(
    `query SupportIssue($issueId: String!) {
      issue(id: $issueId) {
        id
        identifier
        title
        description
        comments(last: 50) { nodes { body createdAt } }
      }
    }`,
    { issueId },
  )
  return result.issue
}

export async function createLinearComment(issueId: string, body: string) {
  const result = await linearRequest<{
    commentCreate: { success: boolean; comment: { id: string } | null }
  }>(
    `mutation CreateSupportComment($input: CommentCreateInput!) {
      commentCreate(input: $input) {
        success
        comment { id }
      }
    }`,
    { input: { issueId, body } },
  )
  if (!result.commentCreate.success || !result.commentCreate.comment) {
    throw new Error('Linear comment creation failed')
  }
  return result.commentCreate.comment
}
