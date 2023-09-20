# MONOREPO GITHUB ACTIONS

A sample monorepo to automate deployments of multiple Cloudflare Workers.

## Tech Stacks

- Lerna
- Cloudflare Workers
- Github Actions

## Notes

- Github Actions listens the `main` branch and trigger on events `push` and `pull_request`
- It detects changes automatically and only deploy changed packages

## Installation and running

```
npm install

# Run all the workers
npx lerna run start

# Run a specific workers
npx lerna run start --scope=<package name>
```

## Deployment

```
# Deploy all packages to the dev environment
npx lerna run deploy-dev

# Deploy all packages to prod environment
npx lerna run deploy

# Deploy a specific package
npx lerna run deploy --scope=<package name>
```

## TODOS

Add multiple environments deployment through Github Actions base on branch name
  - dev
  - staging
  - production
