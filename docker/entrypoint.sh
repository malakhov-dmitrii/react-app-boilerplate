#!/bin/bash

set -e

APP_BASE_PATH=/var/www/app/package

workDir() {
    cd $APP_BASE_PATH
}


startApp() {
    workDir
    export NODE_PATH="$NODE_PATH:`pwd`"
    exec /usr/local/bin/node lib/server.js
}

startSystemWorker() {
    workDir
    export NODE_PATH="$NODE_PATH:`pwd`"
    exec /usr/local/bin/node lib/workers/system.js
}

startMainWorker() {
    workDir
    export NODE_PATH="$NODE_PATH:`pwd`"
    exec /usr/local/bin/node lib/workers/main.js
}


main() {
    if [ "x$CONFIG_BASE64" != "x" ]; then
        mkdir -p ${APP_BASE_PATH}/data/
        echo "$CONFIG_BASE64" | base64 -d > ${APP_BASE_PATH}/data/config.yaml
    fi
    if [ $# -eq 0 ]; then
        startApp
        return $?
    fi
    case $1 in
        startApp) startApp;;
        startSystemWorker) startSystemWorker;;
        startMainWorker) startMainWorker;;
        *) exec "$@";;
    esac
}

main "$@"
