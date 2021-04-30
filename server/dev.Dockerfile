FROM python:3.6-alpine

RUN adduser -D docker
RUN apk update
RUN apk add make automake gcc g++ subversion python3-dev

COPY server/requirements.txt requirements.txt
RUN pip install -r requirements.txt

WORKDIR /home/docker

COPY server/app app
COPY server/configs configs
COPY server/boot.sh server/wsgi.py ./

RUN chmod +x boot.sh

ENV PRODUCTION false

RUN chown -R docker:docker ./
USER docker

EXPOSE 8000
ENTRYPOINT ["sh", "boot.sh"]
