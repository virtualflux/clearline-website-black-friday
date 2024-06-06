FROM node:latest

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

# Install required modules
RUN yarn add next-sanity

COPY . .

RUN yarn build

CMD ["npx", "serve", "out", "-p", "3000"]
