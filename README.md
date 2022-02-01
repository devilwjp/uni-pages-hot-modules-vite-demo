# uni-app vite版本(vue3)示例项目

## 安装
通过`yarn`或者`npm i`安装

## 启动
查看package.json的script命令，项目是标准的uniapp vue3 vite脚手架，启动命令是标准uniapp的启动命令  

## 关注
查看`/vite.config.js`  
查看`/src/pages.json`
查看`/src/page_modules/index.js`和`/src/subpackage_modules/index.js`，这两个文件都使用了`require.context`方法，读取目录中其他所有的文件  
