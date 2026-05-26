# Post

This project uses `Vite + React`. The repository also contains a `server/`
folder, but the current pages do not depend on a real backend API, so the site
can be deployed as a static frontend.

## Local development

Install dependencies:

```bash
npm install
```

If Windows PowerShell blocks `npm.ps1`, use:

```bash
npm.cmd install
```

Start the frontend dev server:

```bash
npm run dev:client
```

Default local URL:

```text
http://localhost:5000
```

## Static build

Build the deployable frontend:

```bash
npm run build:static
```

Output directory:

```text
dist/public
```

Preview the production build locally:

```bash
npm run preview:static
```

Default preview URL:

```text
http://localhost:4173
```

## Deploy to Vercel

The easiest way to get a public link is Vercel.

### Web UI

1. Push this project to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Click `Add New Project`.
4. Import the GitHub repository.
5. Deploy.

This repository now includes `vercel.json`, which tells Vercel to:

- run `npm run build:static`
- publish `dist/public`
- rewrite SPA routes like `/about` to `index.html`

After deployment, Vercel will provide a public URL such as:

```text
https://your-project-name.vercel.app
```

### CLI

If you prefer the command line:

```bash
npm install -g vercel
vercel
```

## Notes

- For this marketing site, `server/` is not required for deployment.
- If you want, the next step can be GitHub upload, Vercel deployment, or custom
  domain setup.
