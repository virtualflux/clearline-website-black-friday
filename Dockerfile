#FROM node:latest

#WORKDIR /app

#COPY package.json yarn.lock ./

#RUN yarn install

#COPY . .

#RUN yarn build

#CMD ["npx", "serve", "out", "-p", "3000"]


# Use a smaller base image to reduce memory usage
FROM node:alpine AS builder

WORKDIR /app

# Copy package files and install dependencies with increased timeout
COPY package.json yarn.lock ./
RUN yarn install --network-timeout 1000000

# Copy application files
COPY . .

# Build application with limited memory
ENV NODE_OPTIONS="--max_old_space_size=512"
RUN node --max_old_space_size=512 node_modules/.bin/next build

# Final image to run the app
FROM node:alpine

WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/out ./

# Install serve globally to serve the static files
RUN yarn global add serve

# Serve the application
CMD ["serve", "-s", ".", "-l", "3000"]
