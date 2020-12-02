# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:12
# install pm2
RUN npm install pm2 -g

RUN mkdir -p /usr/src/book
# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/book

# Install dependencies
COPY package.json /usr/src/book/

RUN npm install

# Copy source files from host computer to the container
COPY . /usr/src/book
# build
RUN npm build
# Specify port app runs on
EXPOSE 4000

# Run the app
CMD [ "pm2", "start" , "/node_modules/react-scripts/scripts/start.js --name book"]

#To build the docker image,docker build [username]/[tag] [dockerfile location]
#docker build -t scott/book:latest .
#run
# docker run -p 8080:3000 scott/book
