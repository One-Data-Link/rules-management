FROM --platform=linux/amd64 node:16-alpine AS BUILD_IMAGE

RUN apk update && apk add yarn curl bash python3 g++ make && rm -rf /var/cache/apk/*

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

RUN npm run build

RUN npm prune --production

# run node prune
# RUN /usr/local/bin/node-prune

# remove unused dependencies
RUN rm -rf node_modules/rxjs/src/
RUN rm -rf node_modules/rxjs/bundles/
RUN rm -rf node_modules/rxjs/_esm5/
RUN rm -rf node_modules/rxjs/_esm2015/
RUN rm -rf node_modules/swagger-ui-dist/*.map
RUN rm -rf node_modules/couchbase/src/
RUN rm -rf node_modules/typescript/lib/

FROM --platform=linux/amd64 node:16-alpine
WORKDIR /app

# COPY ./.env ./dist

COPY --from=BUILD_IMAGE /app/dist ./dist
#COPY --from=BUILD_IMAGE /app/.env ./.env
#COPY --from=BUILD_IMAGE /app/development.env ./development.env
COPY --from=BUILD_IMAGE /app/financialms-ca-certificate.crt ./financialms-ca-certificate.crt
#COPY --from=BUILD_IMAGE /app/.env ./.env
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules


EXPOSE 80

CMD [ "node", "dist/main" ]