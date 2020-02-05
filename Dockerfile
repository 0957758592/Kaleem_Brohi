FROM node:8.16 as st1

EXPOSE 3000

RUN mkdir /app

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY ./ ./
RUN yarn build

RUN npm run build

CMD ["npm", "start", "--no-daemon"]
