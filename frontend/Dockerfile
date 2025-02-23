
FROM node:20-slim

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

# If running on a linux server without x64-gnu architecture, use the following line
# RUN npm install --save-dev @rollup/rollup-linux-x64-gnu

COPY ./frontend ./

RUN npm run build

CMD [ "npm", "run", "preview", "--",  "--port", "3000", "--host" ]
