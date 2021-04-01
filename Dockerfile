FROM node:14

WORKDIR /app

# Copy package and package-lock
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy Project
COPY . .

# Setup Env Variables
ENV NODE_ENV production

CMD ["node", "server.js"]