#FROM node:latest

#WORKDIR /app

#COPY package.json yarn.lock ./

#RUN yarn install

#COPY . .

#RUN yarn build

#CMD ["npx", "serve", "out", "-p", "3000"]


# Use Node.js LTS version as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Start a new stage to keep the final image slim
FROM node:lts-slim

# Set the working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=builder /app/out ./out

# Expose the port that Next.js uses (default is 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["node", "./out/server.js"]
