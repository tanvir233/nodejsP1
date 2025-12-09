FROM node:18-alpine

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081

ENTRYPOINT ["node", "./app.js"]
