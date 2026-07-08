FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

EXPOSE 70

CMD ["serve", "-s", "build", "-l", "3000"]
