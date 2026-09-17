FROM node:22-alpine

WORKDIR /app

# Install dependencies first for better Docker layer caching
COPY package*.json ./

RUN npm install

# Copy application source
COPY . .

# Next.js development server
EXPOSE 3000

CMD ["npm", "run", "dev"]