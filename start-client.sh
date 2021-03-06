#!/usr/bin/env bash

cd client
cp .env.example .env
npm i
npm run build

cd ..

docker build -f client/dev.Dockerfile -t trace-client:latest .
if [ $? -eq 0 ]
then
    echo "Frontend production build built!"
else
    echo "Failed build " >&2
    exit 1
fi


docker run -d -p 80:80 trace-client:latest

if [ $? -eq 0 ]
then
    echo "Frontend production build running on localhost!"
else
    echo "Failed to start Trace Client" >&2
    exit 1
fi
