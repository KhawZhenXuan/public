FROM node:22-bookworm-slim AS build
WORKDIR /app
RUN corepack enable \
    && corepack prepare pnpm@11.21.0 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV VINEXT_TRUST_PROXY=1
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "run", "start"]
