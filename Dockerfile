FROM node:18-alpine

WORKDIR /app
COPY package*.json ./

# Set OpenSSL legacy provider before installing
ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN npm install

COPY . .
RUN npx browserslist@latest --update-db
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]