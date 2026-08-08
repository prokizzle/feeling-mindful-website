# Studio

Studio is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation

## Support portal

Customer requests submitted at `/support` are created in the Linear team mapped
to the selected app. The recommended setup is a Linear OAuth app with client
credentials enabled and the `read`, `issues:create`, and `comments:create`
scopes. Copy `.env.example` to `.env.local`, add the OAuth credentials, and set
each app's Linear team UUID.

For a single-workspace setup, `LINEAR_API_KEY` can be used instead.

### Email threads

The support relay uses Resend for customer email and Linear comments as the
agent inbox. Configure the Resend variables in `.env.example`, then add these
signed webhooks:

- Resend `email.received` → `/api/webhooks/resend`
- Linear `Comment` → `/api/webhooks/linear`

In Linear, start a comment with `/reply` to send it to the customer. All other
comments stay private. Customer email replies are added to the issue
automatically.
