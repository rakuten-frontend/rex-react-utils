# ReX React UI Components Library
## __COMPONENT_NAME__

This project is part of Rex Design Language.

## How it was built 

1. Build tool: webpack 4
1. JavaScript component: React

## How to install

```
npm install __COMPONENT_NAME__ --save
```

## How to add it to your project

### JavaScript Import (ES6)

#### composeClassName

Helps to compose multiple classNames and avoid the empty `class` attribute on DOM elements.

```
import { composeClassName } from '__COMPONENT_NAME__';

function MyComponent({
  className
}) {
  const classList = composeClassName(className);

  return (
    <div {...classList}>Welcome to React</div>
  );
}
```

## How to use it

Check the Storybook site at Github pages:  

https://rakuten-frontend.github.io/__COMPONENT_NAME__/   
