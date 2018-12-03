# ReX React UI Components Library
## rex-react-utils

This project is part of ReX Design Language.   
For more information visit:   

Github  
https://github.com/rakuten-frontend

NPM  
https://www.npmjs.com/org/rakuten-frontend

## How it was built 

1. Build tool: webpack 4
1. JavaScript component: React
1. Base code: ReX React UI Component Starter Kit (https://github.com/rakuten-frontend/rex-react-component-starter-kit)

## How to start the project

The development environment is based on Storybook, for more info visit https://storybook.js.org/ .   

```
npm start
```

## How to build

The build task will generate a NPM package ready to be published and also a static version of Storybook, one folder for NPM `./build/node_modules/rex-react-utils` and other one for Github pages `./docs`.   

```
npm run build
```

## How to check build version

By using Node http-server, you can check the static version of Storybook with production settings and builds.

```
npm run serve
```

## How to publish to NPM
### Build the project

```
npm run build
```

### Login into NPM

Build the project first.  
After that run the following commands:

```
cd build/node_modules/rex-react-utils
npm login
npm publish
```

Once the process finish, take a look to the NPM site:   

https://www.npmjs.com/package/rex-react-utils

## Javascript and React related documents

Take a look to this nice documentation pages to be more familiar with React and modern Javascript:

### Official site
https://reactjs.org/docs/getting-started.html   

### Google Web Fundamentals (the whole site is a must to read)
https://developers.google.com/web/fundamentals/

### Webpack as magic bundler
https://webpack.js.org/

### Composing Software series (how to understand Funcional Programming)
https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea   

### Common React patterns
https://reactpatterns.com   

### Understanding Storybook with nice images
https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07   

### Some guidelines for clean code
https://americanexpress.io/clean-code-dirty-code/

