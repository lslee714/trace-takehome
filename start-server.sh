#!/usr/bin/env bash

docker build -f server/dev.Dockerfile -t trace-server:latest .
if [ $? -eq 0 ]
then
    echo "Trace server image built!"

else
    echo "Failed to build server image" >&2
    exit 1
fi


docker run -p 8000:8000 -d trace-server:latest
if [ $? -eq 0 ]
then
    echo "Trace server running on localhost:8000!"

else
    echo "Failed to start Trace server container" >&2
    exit 1
fi
