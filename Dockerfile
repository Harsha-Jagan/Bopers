# base image
FROM node:18-alpine AS BUILD_IMAGE

RUN mkdir -p /usr/bopers-app/
WORKDIR /usr/bopers-app/
# copy from to
COPY . .
RUN npm ci \
    && npm run build \
    && npm prune --production

FROM node:18-alpine
ENV NODE_ENV production
RUN addgroup -g 1001 -S user_group
RUN adduser -S application -u 1001
RUN mkdir -p /usr/bopers-app/
WORKDIR /usr/bopers-app/
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/bopers-app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/bopers-app/package*.json ./
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/bopers-app/public ./public
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/bopers-app/.next ./.next
EXPOSE 3000
CMD ["npm", "start"]