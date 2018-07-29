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

# Introduction to Components

## What is a component

A component is a view defined by a template, code defined by a class, and metadata defined by a decorator.

* Template
  * View layout
  * Written in HTML
  * Contains binding and directives
* Class
  * Code supports the view
  * Written in Typescript
  * Contains Properties and Methods
* Metadata
  * Extra data for angular
  * Defined with a decorator

Below is an example component used by the app.component.ts file, which is our main app component.

![Component-Example](./Documentation/Images/Component-Example.jpeg)

The **import** section gets the component ES module from angular core. 

The **metadata & template** component section declares what the selector for this class can be referenced by in html, and what the template html looks like. This section can also reference where the html template file, and css styling files are located in the app.

Last the **class** section which contains just one property of pageTitle. That is referenced in the HTML template by `{{pageTitle}}` so will update dynamically based on what the value of the pageTitle property of the AppComponent class. The property is written in *camel case*, meaning first letter is lowercase, then every first letter of words after that are capitalized. The **property name** then has a `:` and **type** assocatied with that property. This class then has a **default value** associated with it after an `=` wrappend in single quotes.

### Defining the Metadata with a Decorator

A **decorator** is a function that adds metadata to a class, its members or method arguments. This usually goes right before the class in the code file. The component is a function, but does not end in a semicolon. In a html template data binding can be done using double curley braces.

### Importing what we need

Import statements are part of ES 2015 and is similar to C# Using statement. Other Modules can import our components as long as they are exported. Angular is also built using modules. When we need methods or properties from angular we also can import those modules from one of the Angular modules below.

* @angular/core
* @angular/animate
* @angular/http
* @angular/router

Every class should import the member Component so it can create the `@component` decorator.  

````typescript
import { component } from '@angular/core';
````

## Demo: Creating the App Component

The below code can be written from scratch in the **app.component.ts** to 

````typescript
import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div>My First Component</div>
    </div>`
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
````

## Bootstrapping our app component

Now that we have a component, how does angular know to load our code? It looks for the selector in the HTML being loaded, which in this case is the index.html. It then looks in an angular module to try to find where the code is for that custom selector. The next step is to declare the component in an angular module. this happens in the **app.module.ts**

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Modules look a lot like components. We export the class, include a decorator and import other modules. For this module we import a few external modules. The BrowserModule is to let angular load the code in a browser to display correctly, the ngModule gets the `@NgModule` decorator which signifies this as an angular module, and then we import our **AppComponent** so that it can be bootstrapped by our application.

In the `@NgModule` decorator we declare an array of declarations, or which components belong to this module. For this app we just have our **AppComponent**, but it could be a list of components seperated by commas. Finally the Bootstrap keyword tells angular which component should be used as the startup component. This should almost always be the **AppComponent** for main modules like this.

### Checklist

Class -> Code
Decorator -> Metadata
Import what we need

#### Code

Give the component class a clear name. Pascal case for classes and append component to the end of the name. Make sure to use the `export` keyword so it can be imported by modules or other components.
camelcase for properties and methodnames.

#### Metadata

Component decorator, prefixed with `@` and use `()` since it is a fucntion. Prefix the selector for clarity. Selector isn't needed if you don't use this component in HTML. Template is the view's HTML.

#### Import

Defines what members the component needs. Uses the `Import` keyword. Member name (what is inside the `{ memberName }`) is case sensitive. The path to the module should be in single quotes, and shouldn't include the extension of the file.

#### Something is wrong

f12 in the browswer to open developer tools. You can find your code under the sources tab, in webpack:// then . and src is where the code files are as seen in the screenshot below.

![Browser-Dev-Tools-Sources](./Documentation/Images/Browser-Dev-Tools-Sources.png)

Check your code for:

* Unclosed tags/braces
* Proper casing

Otherwise check [blog post](http://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/) in case there were some breaking updates in some of the dependencies.

Then post a comment on the discussion page on the [comments page](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/discussion) of pluralsight.

### Summary

Figured out what a component is
Created a component class
Defined the Meta data with a decorator
Imported what we needed
Bootstrapped our app component

The image below shows the final architecture of our app. In this module we created the app component section of the diagram.

![Application-Architecture](./Documentation/Images/Application-Architecture.jpeg)

Next is taking a closer look at templates, and creating the product list component.