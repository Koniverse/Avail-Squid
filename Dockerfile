FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm i -g @subsquid/cli@latest
EXPOSE 3000

CMD ["sqd", "serve"]

