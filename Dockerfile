FROM  node:9.3.0-alpine
MAINTAINER  CL.Lam "lincl@vanke.com"
LABEL version="0.1"
LABEL description="H5前端模拟数据工具"

USER root
RUN apk --no-cache --update add tzdata  && rm -rf /var/cache/apk/*

# 重要设置image的时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn config set registry https://registry.npm.taobao.org
RUN npm install
#RUN npm run create-db

CMD ["npm","start"]
