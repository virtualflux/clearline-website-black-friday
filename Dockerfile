#FROM node:latest

#WORKDIR /app

#COPY package.json yarn.lock ./

#RUN yarn install

#COPY . .

#RUN yarn build

#CMD ["npx", "serve", "out", "-p", "3000"]


# Base image for building the application
FROM node:alpine AS builder

WORKDIR /app

# Copy package files and install dependencies with increased timeout
COPY package.json yarn.lock ./
RUN yarn install --network-timeout 1000000

# Copy application files
COPY . .

# Set Node.js options to limit memory usage during build
ENV NODE_OPTIONS="--max_old_space_size=512"

# Build application with limited memory
RUN node --max_old_space_size=512 node_modules/.bin/next build

# Final image to run the app
FROM node:alpine

WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Install serve globally to serve the static files
RUN yarn global add serve

# Expose the application port
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "public", "-l", "3000"]
