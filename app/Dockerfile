
# Stage 1: Build & Test
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm test

# Stage 2: Production image
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY src/ ./src/

EXPOSE 3000
USER node
CMD ["node", "src/index.js"]
```
