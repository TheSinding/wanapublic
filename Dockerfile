FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN npm install serve --silent
COPY dist/ .
EXPOSE 5000

CMD ./node_modules/.bin/serve .