FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

COPY backend/package*.json ./

RUN npm install

COPY ./backend ./

RUN npm run build
EXPOSE 3001

CMD ["npm", "run", "start"]
