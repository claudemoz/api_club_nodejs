FROM node:lts-bullseye
WORKDIR /app
COPY package*.json ./

RUN npm install -g typescript ts-node tsc-watch
RUN npm install 

COPY . .
EXPOSE 5000
CMD [ "npm", "run", "dev"]