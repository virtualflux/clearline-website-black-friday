FROM node:22-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

ENV PORT 3008

EXPOSE 3008

CMD ["yarn", "start"]
