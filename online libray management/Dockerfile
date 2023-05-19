# using a base image from redhat
FROM registry.access.redhat.com/ubi8/nodejs-18-minimal

WORKDIR /usr/src/app

# Copy in package.json and package-lock.json
COPY --chown=1001:1001 package*.json ./

# Install dependencies and devDependencies
RUN npm ci
RUN npm prune --omit=dev

# Copy in source code and other assets
COPY --chown=1001:1001 . .

# Configure  behaviour
# ENV VAR...

# Open port 3000 and 27017
EXPOSE 3000
EXPOSE 27017

# Set the npm binary as the entrypoint
ENTRYPOINT [ "npm" ]

# Launch the container by passing these parameters to the entrypoint
# These parameters can be overridden if you’d like
CMD [ "start" ]
