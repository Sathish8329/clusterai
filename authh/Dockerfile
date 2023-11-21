# Use an official Node.js runtime as the base image
# FROM keymetrics/pm2:latest-alpine
FROM node:16-alpine
# FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install PM2 globally
RUN npm install pm2 -g

# Bundle app source
COPY . .

# Run the build process (if required)
RUN npm run build

# Expose the port your application listens on (change it according to your application's setup)
EXPOSE 8080

# Use PM2 as the entry point to manage your application with a custom process name
CMD ["pm2-runtime", "start", "npm", "--name", "auth", "--", "start"]
