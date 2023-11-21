# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY package*.json /react-app/
RUN npm install --force
RUN npm install pm2 -g

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application M2 as the entry point to manage your application with a custom process name
CMD ["pm2-runtime", "start", "npm", "--name", "api", "--", "start"]
