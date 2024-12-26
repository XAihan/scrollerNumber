#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME
git add . 
git commit -m "进行github page的提交和部署"
git push

# 将gh-pages的内容直接部署到对应地址
git subtree push --prefix dist origin gh-pages

# 如果你要部署在 https://<USERNAME>.github.io
git push -f git@github.com:XAihan/XAihan.github.io.git master

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
