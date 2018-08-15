# Never Ending GAF Website

> VueJS for the GAFs

## Build Setup

``` bash
# install dependencies
npm install
OR
yarn

# serve with hot reload at localhost:8080
npm run dev
OR
yarn run dev

# build for production with minification
npm run build
OR
yarn run build

# build for production and view the bundle analyzer report
npm run build --report
OR
yarn run build --report

# run unit tests
npm run unit
OR
yarn run unit

# run all tests
npm test
OR
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## NGINX Config

```
server {
        listen 80;
        listen [::]:80;

        root /var/www/NeverEndingGAF/web/dist;
        server_name www.neverendinggaf.com;

        index index.html;

        error_page 404 /index.html;

        location / {
        }

}
```
