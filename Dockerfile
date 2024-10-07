# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Run stage
FROM node:18-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 6200

RUN npm install pm2 -g

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]