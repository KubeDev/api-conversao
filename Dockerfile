#FROM node:14.16.1-alpine3.13
FROM ubuntu
WORKDIR /app
COPY package*.json ./
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y nodejs npm
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]
