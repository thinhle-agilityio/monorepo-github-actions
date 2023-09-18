# MONOREPO GITHUB ACTIONS

A sample monorepo to automate deployments of multiple Cloudflare Workers.

## Tech Stacks

- Lerna
- Cloudflare Workers
- Github Actions

## Notes

- Github Actions listens the `main` branch and trigger on events `push` and `pull_request`
- It detects changes automatically and only deploy changed packages

## TODOS

Add multiple environments deployment through Github Actions base on branch name
  - dev
  - staging
  - production
