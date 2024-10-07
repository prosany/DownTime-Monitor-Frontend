# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and yarn.lock to install dependencies first
COPY package.json yarn.lock ./

# Pass build-time environment variable for NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all source files to build the Next.js app
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Run stage
FROM node:18-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/ecosystem.config.js ./ecosystem.config.js

# Expose the port the app will run on
EXPOSE 6200

# Install PM2 globally
RUN npm install pm2 -g

# Command to start the app using PM2
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
