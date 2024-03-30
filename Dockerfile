FROM node:20-alpine

WORKDIR /app

RUN npm i -g @subsquid/cli@latest
RUN npm ci

EXPOSE 3000

CMD ["sqd", "serve"]

