# First Things First

## Installing an Angular Application

First thing that needs to happen is to install all the dependencies in the form of node_modules. To see what dependencies need to be installed check out the [package.json](./package.json) which stores all the packages and versions needed to run the project. These packages can be installed by navigating to the same folder as the package.json in terminal/cmd and then executing:

```bash
npm install
```

Visual studio code has a nice feature where it will allow you to right click open in terminal from the same folder making this very easy.

## Running an Angular Application

The [package.json](./package.json) file also holds the startup code for the application. The first block at the top determines what the start command is.

```json
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
```

For this project it is `ng serve -o` which is common for most applications. The O stands for open and will open the application in the default browser. To start the app open terminal/cmd and make sure you are in the same folder as the package.json then run:

```bash
npm start
```

 It should open up your default browser with an interactive web session hosted by a local web server started up on your computer. To stop this web server hit ctrl or cmd + c in the terminal window where you started it.

## About Modules

There are Four kinds of modules, but we will only focust on the latter two.

1. AngularJS Modules
1. Typescript Modules
1. ES 2015 Modules
1. Angular Modules

### ES 2015 Modules

These help organize our Code files. It makes us able to import or export things such as components. To export a component from a file called product.ts we would use the below syntax.

product.ts

```typescript
export class Product {

}
```

If we then wanted to use that component in another component (like our product-list.ts file below) or module we would then import it like below:

product-list.ts

```typescript
import { Product } from './product'
```

### Angular Modules

Angular Modules help orgainze our application into blocks of functionality. These modules can be shared or private. Components and dependencies get declared by a root module. They promote boundaries between our application.

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

The `import` section gets the component ES module from angular core.

The `metadata & template` component section declares what the selector for this class can be referenced by in html, and what the template html looks like. This section can also reference where the html template file, and css styling files are located in the app.

Lastly, the `class` section, which in this example contains just one property of pageTitle. That Property is referenced in the HTML template by `{{pageTitle}}` so will update dynamically based on what the value of the pageTitle property of the AppComponent class. The property is written in *camel case*, meaning first letter is lowercase, then every first letter of words after that are capitalized. The `property name` then has a `:` and `type` assocatied with that property. This class then has a `default value` associated with it after an `=` wrappend in single quotes.

### Defining the Metadata with a Decorator

A `decorator` is a function that adds metadata to a class, its members or method arguments. Metadata can be things like a:

`selector`: the custom HTML tag called a `directive` which can be used to tell angular where this is supposed to go in our app's HTML

`template`: the HTML that our component uses to display or do what we want it to do

This usually goes right before the class in the code file. The component is a function, and does not end in a semicolon. In a html template data binding can be done using double curley braces.

### Importing what we need

Import statements are part of ES 2015 and is similar to C# Using statement. Other Modules can import our components as long as they are exported. Angular is also built using modules. When we need methods or properties from angular we also can import those modules from one of the Angular modules below.

* @angular/core
* @angular/animate
* @angular/http
* @angular/router

Every class should import the member Component so it can create the `@component` decorator.  

```typescript
import { component } from '@angular/core';
```

## Demo: Creating the App Component

The below code can be written from scratch in the `app.component.ts` to 

```typescript
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
```

## Bootstrapping our app component

Now that we have a component, how does angular know to load our code? It looks for the selector in the HTML being loaded, which in this case is the index.html. It then looks in an angular module to try to find where the code is for that custom selector. The next step is to declare the component in an angular module. this happens in the `app.module.ts`

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

Modules look a lot like components. We export the class, include a decorator and import other modules. For this module we import a few external modules. The BrowserModule is to let angular load the code in a browser to display correctly, the ngModule gets the `@NgModule` decorator which signifies this as an angular module, and then we import our `AppComponent` so that it can be bootstrapped by our application.

In the `@NgModule` decorator we declare an array of declarations, or which components belong to this module. For this app we just have our `AppComponent`, but it could be a list of components seperated by commas. Finally the Bootstrap keyword tells angular which component should be used as the startup component. This should almost always be the `AppComponent` for main modules like this.

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

# Templates, Interpolation, and Directives

Web apps are all about the user interface, and angular makes this easy to do. Now we will focus on techniques to build out the template. 

## Overview

Build a Template
Using a Compenent as a Directive
Binding with Interpolation
Adding logic with Directives

## Building a Template

Templates can be built inline using a quoted or ES 2015 back ticks so that it can be multi-line. The better way is to use a linked template that is referenced in the `@Component` decorator with the path to the .html file.

We will make a heading, filter by box, show what is filtered to, a table with nicely formatted headers, and a show-hide toggle button.

### Adding styles

The styling will be done using [bootstrap](https://getbootstrap.com/) and [fontAwesome](https://fontawesome.com)

First install boostrap and fontawesome.

```bash
npm install bootstrap font-awesome
```

The warnings about needing jquery and popper don't matter to us since we just need the style sheets.

These style sheets got downloaded to the node modules folder under the path [~bootstrap/dist/css/bootstrap.min.css](./node_modules/bootstrap/dist/css/bootstrap.min.css) and [~font-awesome/css/font-awesome.min.css](./node_modules/font-awesome/css/font-awesome.min.css) respectively. the .min means they are minimized so they have no spaces or any characters not needed to run successfully. The next step to use these is to import them into our [styles.css](./src/styles.css) file.

```css
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";
```

This file is a global style sheet, so these styles are now available to any template in our application.

### Adding the template HTML file

By convention all angular modules should have their own folder under the app folder. Since this is the Products module create a products folder resulting in this path `./src/app/products`

Then create the `product-list.component.html` file. The convention for this is to have it be the same name as the component with a .html extension. 

```html
<div class='card'>
    <div class='card-header'>
        Product List
    </div>
</div>
```

The contents of the file so far will just be the title of the section, with some of the `bootstrap styles` thrown in. Next we need to add the `filter by` text box as well as the filtered by sub header section for when something is actively being filtered.

```html
<div class='card'>
    <div class='card-header'>
        Product List
    </div>
    <div class='card-body'>
        <div class='row'>
            <div class='col-md-2'>Filter By:</div>
            <div class='col-md-4'>
                <input type='text' />
            </div>
        </div>
        <div  class='row'>
            <div class='col-md-6'>
                <h4>Filtered by: </h4>
            </div>
        </div>
    </div>
</div>
```

This is again using bootstrap styling classes to create the headers. Then the `<input>` tag adds a user control of type text box. I think the styling for that is handled by the div it is contained within, but the functionality comes for free with bootstrap. Next is to add the product list table.

```html
<div class='card'>
    <div class='card-header'>
        Product List
    </div>
    <div class='card-body'>
        <div class='row'>
            <div class='col-md-2'>Filter By:</div>
            <div class='col-md-4'>
                <input type='text' />
            </div>
        </div>
        <div  class='row'>
            <div class='col-md-6'>
                <h4>Filtered by: </h4>
            </div>
        </div>
        <div class='table-responsive'>
            <table class='table'>
                <thead>
                    <tr>
                        <th>
                            <button class='btn btn-primary'>
                                Show Image
                            </button>
                        </th>
                        <th>Product</th>
                        <th>Code</th>
                        <th>Avialable</th>
                        <th>Price</th>
                        <th>5 Star Rating</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
</div>
```

There are a lot of tags going on for table creation, here are what they mean.

`<div class='table-responsive'>` is a bootstrap style that allows the table to scroll horizontally on smaller screens.

`<table>` tag creates the table.

`<thead>` allows for customization of the table headers.

`<tr>` creates a table row, and header rows is considered a row.

`<th>` creates headers which are by default scoped to rows (header row on the top), but can also be scoped to the side (so header rows down the first column.)

`<tbody>` is where data is populated for the table. Since we don't want to hard code the data in we can leave this blank for now.

Next is to build the component to use this template.

## Building the Component

The steps are:

* define a class
* add a @component decorator
* import the needed modules

Create the file in the products folder called product-list.component.ts

```typescript
import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
}
```

Only thing different from the app component is that we are using the `templateUrl:` decorator instead of the inline template one.

Next we need to hook this new component up to our app.

## Using a component as a Directive

There are two steps to add a component to our app.

1. add a directive (custom HTML tag) to the index.html
1. add an the new component to declaration decorator and import of our root [app.module.ts](./src/app/app.module.ts)

First add the directive to the template of our [app.component.ts](./src/app/app.component.ts) file.

```typescript
@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>`
})
```

This tells our app where our component should show up. This custom HTML tag we added is called a `directive` and is how html implements angular components.

If we run the app with just that added it will not load anything, but we will get a very good error in the developer tools console of the browser. The problem is the directive we added isn't know by our [app.module.ts](./src/app/app.module.ts). The error is very nice in that it will give a solution to the problem, which would be to add the component that contains 'pm-products' to the app module. So let's do just that. In our [app.module.ts](./src/app/app.module.ts) file add `ProductListComponent` to our the declarations decorator and then import the `ProductListComponent` from our file.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

If using VS Code with angular extensions enabled when you start typing in the declarations array it will autocomplete the component name `And` add the appropriate import statement. Pretty cool!

Now the page should show up. It won't do anything, but it is all there.

Next step is to add some functionality to our app with data binding and some built in directives.

## Binding with Interpolation