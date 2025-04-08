# syntax=docker/dockerfile:1

# Use official Node Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build

# Expose Vite port
EXPOSE 5173

# Set environment and run the app in dev mode
ENV NODE_ENV=development
CMD ["npm", "run", "dev", "--", "--host"]
