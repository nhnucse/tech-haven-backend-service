FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --no-cache
COPY . .
RUN npm install -g nodemon
EXPOSE 8088
CMD [ "npm", "start" ]
# FROM base as production
# ENV NODE_ENV=production
# RUN npm ci
# COPY . /
# CMD ["node", "bin/www"]

# FROM base as dev
# ENV NODE_ENV=development
# RUN npm install
# COPY . /
# CMD ["npm", "start"]