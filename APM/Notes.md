# First Things First

## Installing an Angular Application

[package.json](./package.json) is a file that stores all the packages and versions needed to run the project. These packages can be run by executing

````bash
npm install
````

in the same folder. Visual studio code has a nice feature where it will allow you to right click open in terminal from the same folder making this very easy.

## Running an Angular Application

the [package.json](./package.json) file also holds the startup code for the application. The first block at the top determines what the start command is. 

````json
{
  "name": "apm",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve -o",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
````

For this project it is `ng serve -o` which is common for most applications. The O stands for open and will open the application in the default browser. ctrl or cmd + c will close the web server.

## About Modules

There are Four kinds of modules.

1. AngularJS Modules
1. Typescript Modules
1. ES 2015 Modules
1. Angular Modules

### ES 2015 Modules

These help organize our Code files. It makes them able to import or export things.

product.ts

````typescript
export class Product {

}
````

product-list.ts

````typescript
import { Product } from './product'
````

### Angular Modules

Angular Modules help orgainze our application into blocks of functionality. There can be shared modules or not shared modules. Components and dependencies get declared by a root module. They promote boundaries between our application.