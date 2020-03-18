# Note

[將 redux 與 react-router 深度整合](https://juejin.im/post/5b4de4496fb9a04fc226a7af)

有時候我們可能希望將 redux 與 react router 進行更深度的整合，實現：

* 將 router 的數據與 store 同步，並且從 store 訪問
* 通過 dispatch actions 導航

通過 connected-react-router 和 history 兩個庫將 react-router 與 redux 進行深度整合實現。

`yarn add connected-react-router`

react-router react-router-dom

yarn add redux react-redux

## Redux Saga

Redux 界的非同步救星
Redux - Saga 在 Redux 中是以 Middleware （中間件）存在的
原本被 dispatch 觸發的 Method 從 Reducer 變成 Redux - Saga 
換句話說 Redux - Saga 成為 Component 及 Reducer 之間溝通的橋樑。

`yarn add react-redux`

## shared\elements.js

`yarn add styled-components shortid react-i18next i18next i18next-browser-languagedetector`

## module.hot

site\src\index.js  
[模块热替换](http://webpack.docschina.org/api/hot-module-replacement/)  

> React Hook "useTranslation" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?  react-hooks/rules-of-hooks
