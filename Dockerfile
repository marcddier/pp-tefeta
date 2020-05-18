FROM node:13.2.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
CMD [ "node", "main.js" ]
