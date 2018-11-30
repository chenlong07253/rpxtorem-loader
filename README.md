# rpxtorem-loader

### Introduction

    开发时新增一个长度单位rpx，编译为rem，在不同屏幕下跟px的对应转换如下:

    320        20rpx == 1rem == 18px

    360        20rpx == 1rem == 20px

    375        20rpx == 1rem == 20px

    414        20rpx == 1rem == 22px

    开发的时候以375为标准，1rpx == 1px ，不需要自适应用px，需要自适应就在px前面加上r。



### Development Setup

``` bash

# Install
npm install rpxtorem-loader --save-dev

# webpack loader配置
css-loader!rpxtorem-loader

# index.js设置字体
import 'rpxtorem-loader/font';

``` 

    

    