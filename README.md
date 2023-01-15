[youtube教程](https://youtu.be/WDodWU-B-aY)

這是看了youtube教程做的SolidJS練習。

``` bash
npx degit solidjs/templates/js my-app 
cd my-app 
npm i # or yarn or pnpm > npm run dev # or yarn or pnpm
npm run dev
```

## Solid Router
```bash
npm i solid-app-router

```

```jsx
// index.jsx
import { Router, hashIntegration } from 'solid-app-router'

<Router source={hashIntegration()}><App></Router>

```