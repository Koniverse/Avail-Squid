FROM node:20-alpine

WORKDIR /app

RUN npm i -g @subsquid/cli@latest

EXPOSE 3000

CMD ["sqd", "serve"]