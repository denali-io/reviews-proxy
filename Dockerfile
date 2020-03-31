FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN apt-get update
RUN apt-get install vim

EXPOSE 5000

CMD ["npm", "start"] 