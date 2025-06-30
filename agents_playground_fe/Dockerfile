# agents-playground-fe/Dockerfile

FROM node:20-alpine

WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy full source code
COPY . .

# Expose frontend port
EXPOSE 7860

# Start in dev mode
CMD ["npx", "next", "dev", "-p", "7860"]
