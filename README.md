# vue-node-mysql

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### node app.js 启动接口服务 127.0.0.1:3001

### 开启docker
```
!web项目端口:80, 设置在nginx配置中default.conf

1.安装docker应用 https://docs.docker.com/
2.cd project-path
2.docker build -t imageName:tag . 
3.docker run -p 3000:80 -d --name containerName imageName:tag

docker相关命令: 
    查看运行中容器  docker ps;
    开启容器       docker start containerName;
    关闭容器       docker stop containerName
    删除容器       docker rm -f containerId
    删除镜像       docker rmi imageName
```

