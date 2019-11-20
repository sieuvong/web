FROM node:10.15.3-alpine

COPY . .

RUN yarn install

EXPOSE 3001

CMD yarn start