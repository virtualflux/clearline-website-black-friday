FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "sanity", "start"]
