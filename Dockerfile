FROM node:16-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

ENTRYPOINT [ "npm" ]

EXPOSE 8080

CMD [ "run", "start"]