FROM oven/bun:1 as base

WORKDIR /usr/src/app

COPY . .

RUN bun install
ENV NODE_ENV=production
RUN bun run build

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]