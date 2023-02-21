FROM node:19-alpine

# set working directory
WORKDIR /vite

# add `/services/node_modules/.bin` to $PATH
ENV PATH /vite/node_modules/.bin:$PATH

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]