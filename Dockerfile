FROM node:18
WORKDIR /usr/src/app.
COPY . .

RUN cd frontend && npm i
RUN cd frontend && npm run build
RUN cd server && npm i

EXPOSE 5174

CMD ["node", "server/server.js"]