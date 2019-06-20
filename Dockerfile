# node 版本
FROM node:8.16.0-jessie

# 安装nginx
RUN apt-get update \
    && apt-get install -y nginx

# 指定目录
WORKDIR /app

# 将当前目录拷贝到工作目录
COPY . /app/

# 声明容器运行时所提供的服务端口
EXPOSE 80

# 安装依赖
# 编译
# 将dist目录下的文件移动到var/www/html 目录下
# 删除/app目录
RUN npm install \
    && npm run build \
    && cp -r build/* /var/www/html \
    && rm -rf /app

# 以前台的方式启动 nginx
CMD ["nginx", "-g", "daemon off;"]
