FROM nginx:latest
COPY /dist/schuett-webapp  /usr/share/nginx/html
COPY /deployment/nginx.conf /etc/nginx/conf.d/default.conf