FROM node:18.16.0

WORKDIR /app

COPY package.json /app

COPY ./ /app

RUN npm i

RUN ls -al

CMD [ "./server.sh" ]