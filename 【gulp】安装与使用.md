## gulp的安装
* 全局安装gulp，[snpm i -g gulp]
* 查看gulp版本，[gulp -v]
* 项目文件夹本地安装gulp，[snpm i --save gulp]，注意：安全卫士等去掉，以免影响安装

## gulp使用中需要使用浏览器自动刷新功能，因此要下载browser-sync插件到本地
[snpm i --save-dev browser-sync]

## gulp的使用
* 项目文件夹下创建 gulpfile.js文件 —— gulp的配置文件
* 五大语句，task/src/pipe/dest/watch —— 创建任务/文件源路径/处理过程/目标路径/监听
* gulpfile.js文件的基本语法 —— 参考gulpfile.js文件
