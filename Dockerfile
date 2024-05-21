#FROM node:latest

#WORKDIR /app

#COPY package.json yarn.lock ./

#RUN yarn install

#COPY . .

#RUN yarn build

#CMD ["npx", "serve", "out", "-p", "3000"]


# Use the official Node.js image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to run the Next.js server
CMD ["yarn", "start"]
