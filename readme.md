# 初始化
```$xslt
cnpm init -y
```
```
cnpm install webpack webpack-dev-server --S
cnpm install babel-core babel-loader -D
cnpm install babel-preset-es2015 babel-preset-stage-0 babel-preset-react -D
cnpm install  css-loader style-loader less less-loader html-webpack-plugin -D
```
# react
```
cnpm install react react-dom redux react-redux react-router-dom -S
```
# fetch
```$xslt
cnpm install es6-promise whatwg-fetch -D

```
# node
```
cnpm install express -S
```

# scripts
```
"start" : " webpack-dev-server --port 5000 --open --progress --colors"
"build" : " webpack -p"
```
# 插件
```
cnpm install swipe-js-iso react-swipe --S
```
# store 

- store onlyone
- actions 发布的动作
- reducers 
- action-types