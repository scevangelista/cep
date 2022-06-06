FROM node:16

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
RUN npm install
COPY . .
RUN sed -i 's/localhost/db/g' config/db.config.js

EXPOSE 3500
CMD [ "node", "server.js" ]