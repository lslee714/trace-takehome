FROM nginx:1.17.10-alpine

COPY ./client/build /var/www
COPY ./client/nginx.conf /etc/nginx/nginx.conf

ENV REACT_APP_BACKEND_DOMAIN http://localhost:8000

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
