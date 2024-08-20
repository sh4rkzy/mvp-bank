FROM node:alpine3.20 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:alpine3.20 AS production-stage

WORKDIR /app

COPY --from=build-stage /app .

CMD ["npm", "start"]