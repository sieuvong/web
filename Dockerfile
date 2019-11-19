FROM node:10.15.3-alpine

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 3001

CMD yarn start