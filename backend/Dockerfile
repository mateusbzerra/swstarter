FROM node:20-alpine

WORKDIR /app

ENV PORT=3001

COPY backend/package*.json ./

RUN npm install

COPY ./backend ./

RUN npm run build

EXPOSE 3001

ENV NODE_ENV=production

CMD ["npm", "run", "start"]
