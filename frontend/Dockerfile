FROM node:alpine3.20 AS build-stage

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev"]