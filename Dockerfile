FROM nginx:latest
COPY /dist/auth0_webapp  /usr/share/nginx/html
COPY /deployment/nginx.conf /etc/nginx/conf.d/default.conf