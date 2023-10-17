# Use an official Node.js runtime as the base image
FROM node:13.12.0-alpine

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your Node.js application listens on (e.g., 80)
EXPOSE 80

# Define the command to start your Node.js application
CMD [ "npm", "start" ]
