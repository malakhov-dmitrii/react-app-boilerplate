FROM node:10.14.1-alpine

ENV NODE_CONFIG=/var/www/app/data/config.yaml
ENV NODE_ENV=productionLocal

RUN apk add bash && \
mkdir -p /var/www/app/package

COPY package/package*.json /var/www/app/package/
COPY package/npm-shrinkwrap.json /var/www/app/package/

ADD ./.npmrc /root/.npmrc

RUN cd /var/www/app/package && \
npm ci --only=production && \
rm -f /root/.npmrc

COPY package/ /var/www/app/package/

ADD ./entrypoint.sh /entrypoint.sh
RUN chmod 755 entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
