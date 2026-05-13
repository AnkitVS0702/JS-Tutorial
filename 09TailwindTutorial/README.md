## Design System

A design system is a collection of:

reusable UI components,design rules,styling guidelines.patterns,and documentation.


used to build applications with a consistent look and behavior.Think of it as:

A complete “UI rulebook + component library” for a company or product.

```
Example of design system:- Material Design by Google
Ant Design by Ant Group
```
## PostCSS
It is a tool that processes and transforms CSS using JS plugins
It takes your CSS, applies plugins to modify it, and outputs final CSS.

It uses plugins like Autoprefixer

### Common Uses of PostCSS
## 1. Vendor Prefixing
It is done by Autoprefixer (a plugin used by PostCSS)

Ex:-
```
.box {
  display: flex;
}
```

is transformed to

```
.box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```
### 2. Tailwind CSS processing
The tailwind plugin used by PostCSS reads the directives like 
```
@tailwind utilities;
```
and converts them to actual CSS utility classes

### 3. Optimize CSS
It can minify CSS and remove unused CSS. 


## Important CSS configuration
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

1st one Removes inconsistent browser default styles, Sets sensible defaults for typography, buttons, headings, etc. Eg:Different browsers style h1 and button differently.Tailwind resets them so styling becomes predictable.

2nd one is for Reusable styled UI blocks.

3rd one is used to imports Tailwind’s utility classes like: flex, pt-4 etc. Without this line, Tailwind utility classes would not work. Its the All the small helper classes you use in JSX.


# What is Tailwind
It is a utility first CSS framework
Its bundle size is less than 10KB !!!
So it is best for production grade as it reduces traffic in the network.

### 1. Utility classes 
It provides small utility classes like:pt-4, flex, text-center etc. 
Each class performs one specific styling task.

### 2. Responsive Design
Easy responsive layouts using breakpoints.
```html
<div class="text-sm md:text-lg lg:text-2xl">
```
### 3. Customization
We acan customize colours, spacing etc. inside tailwind.config.js


## Installation

I have used Tailwind CLI configuration

### Note
In the src/input.html lik the dist/output.css and not the src/input.css

In the src/input.css we have written just the directive
```
@import "tailwindcss"
```

It replaces the three lines which we used to write earlier
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

It tells the tailwind to start searching from the files where we have written tailwind css and then write only the required css corresponding to the utility classes 
used in our project to to dist/output.css


Older versions required manually specifying those files via 
```
content: ["./src/**/*.{html,js}"]
```


But now v4 version of Tailwind does this manually.

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

--watch is used to continuously monitor andd automatically rebuild on changes

### When I am using Tailwind CSS CLI then after running the command I am able to see the generated css in the dist/output.css file . But when I have configured tailwind to use in Vite React project and then during the dev time i.e. when I run npm run dev then in which file is the css generated ? How can I see it?

There is usually NO physical generated CSS file during development.

Instead:

Vite runs a dev server

Tailwind generates CSS in memory

Vite injects CSS directly into the browser

The Generated CSS exists: temporarily in memory inside Vite's dev server process

and is injected into the browser dynamically.

No permanent output.css file is created in development mode.

When we run 
```
npm run build
```
Then vite created the files like index-a1b2c3.css,index-x9y8z7.js inside 
```
dist/assets/
```

## Advantage of this during dev phase
Keeping CSS in memory during development gives:

faster reloads

instant HMR

better performance


