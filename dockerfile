FROM node:20-alpine

WORKDIR /app
COPY . .
WORKDIR /app/frontend
RUN npm install
#RUN npm run dev
EXPOSE 4173
CMD ["npm", "run", "dev"]