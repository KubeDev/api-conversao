FROM ubuntu:latest
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get install -y nodejs
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]

