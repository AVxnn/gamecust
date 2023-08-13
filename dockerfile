FROM node:16.20.2
WORKDIR /
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:16.20.2
WORKDIR /
ENV NODE_ENV production

COPY --from=builder /<имя проекта>/public ./public
COPY --from=builder /<имя проекта>/package.json ./package.json
COPY --from=builder /<имя проекта>/.next ./.next
COPY --from=builder /<имя проекта>/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]