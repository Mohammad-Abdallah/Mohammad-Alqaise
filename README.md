# Mohammad Abdalla — Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Motion.

## Image setup

Place the three portfolio images inside `public/images/`:

| File | Content | Used in |
| --- | --- | --- |
| `public/images/1.jpg` | Mohammad's personal profile photo | Hero and About sections |
| `public/images/2.png` | Masar Arts / Masar Fanni logo | Masar Arts project card |
| `public/images/3.jpg` | Interactive Spotlight image | Interactive Spotlight project card |

The project includes designed fallbacks, so the page remains usable while an image is missing. If a filename or extension differs, update only the `portfolioImages` object in:

```text
data/portfolio.ts
```

For example:

```ts
profile: {
  src: "/images/1.png",
  alt: "Portrait of Mohammad Abdalla",
  fit: "cover",
}
```

Keep the leading `/images/` path because files in `public/` are served from the website root.

## Social links

Instagram, LinkedIn, and GitHub links are stored in the `socialLinks` array in:

```text
data/portfolio.ts
```

Updating a URL there updates the Hero, Contact, and Footer sections automatically. Email and CV placeholders are stored in the `contact` object in the same file.

## Run locally

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

### Git deployment

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/).
3. Select **New Project** and import the repository.
4. Vercel detects Next.js automatically; keep the default build settings.
5. Select **Deploy**.

Future pushes to the connected production branch trigger new deployments. Pull requests and other branches can receive preview deployments.

### CLI deployment

From the project root:

```bash
npx vercel
```

Follow the prompts to connect or create a Vercel project. Use `npx vercel --prod` when you are ready to create a production deployment.

See the official [Next.js on Vercel documentation](https://vercel.com/docs/frameworks/full-stack/nextjs) for current deployment details.
