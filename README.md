# BWEL LIMITED

Corporate website for BWEL LIMITED, a Lagos trading company.

## Development

```sh
git clone https://github.com/Ebongest/bwel-limited.git
cd bwel-limited
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deploy

Deployed to Vercel. The build targets the `vercel` Nitro preset (see `vercel.json`),
which produces a Vercel serverless function rather than the framework's Cloudflare
Workers default.

```sh
vercel --prod
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
