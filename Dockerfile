# Use Node.js LTS (v18)
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (including devDependencies for building)
RUN npm install

# Copy the rest of the app
COPY . .

# (Optional) Print installed Node.js & npm versions for debugging
RUN node -v && npm -v

# Build the app (skip if you just want to run `npm run dev`)
RUN npm run build

# Expose port (default for Next.js)
EXPOSE 3000

# Start the app (use `npm start` for production)
CMD ["npm", "run", "dev"]