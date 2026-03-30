---
name: deploy
description: Build, commit, push to main, and verify Vercel deployment. Use when ready to ship changes.
disable-model-invocation: true
---

# Deploy

Ship changes to production.

## Steps

1. **Build check** — Run `npm run build`. If it fails, fix errors before proceeding.

2. **Review changes** — Run `git status` and `git diff --stat` to see what's changed.

3. **Stage and commit** — Stage relevant files (not .env, not node_modules). Write a conventional commit message.

4. **Push** — `git push` to main.

5. **Verify** — The Vercel deployment auto-triggers on push. Check `vercel ls --scope feeling-mindful` to confirm deployment started.

## Notes
- This project deploys to feelingmindful.com via Vercel
- Push to main = production deploy (no staging/preview branch workflow)
- Build must pass before committing — the PreToolUse hook should catch this but verify manually
