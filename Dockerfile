FROM node:19-alpine

# set working directory
WORKDIR /vite

COPY package.json .

RUN yarn add vite --dev
RUN yarn install

COPY . .

EXPOSE 3000