### this file is used for containerizing just this frontend

## STAGE 1: Build ###

# # Use the official image as a parent image.
FROM node:12.7-alpine AS build

# Set the working directory.
WORKDIR /usr/src/app/app-ui

# Copy the file from your host to your current location in the container
COPY package.json package-lock.json ./

# Run the command inside your image filesystem.
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# # Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 80

RUN npm run build

## STAGE 2: Run ###
FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/social /usr/share/nginx/html


# not now

# # Run the specified command within the container.
# CMD [ "npm", "start" ]
