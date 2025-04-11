FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose the application port
EXPOSE 5000

# Run the built server
CMD ["node", "dist/server.js"]