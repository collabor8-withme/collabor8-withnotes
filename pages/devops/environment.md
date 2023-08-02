# 环境变量
## 环境变量是什么
他是存在系统内的一个全局变量

## 种类
### 用户变量
专属与某个用户的全局变量

### 系统变量
所有用户都可以查看使用的全局变量


环境变量有很多
- PATH
- HOME

查看环境变量
```
env
```

怎么去添加一个环境变量
- 临时添加
``` shell
zhouxin=1234
export zhouxin
```

- 永久添加
```
root用户的家目录
/root/.bashrc
/root/.bash_profile

JAVA_HOME=/jdk/bin
CLASS_HOME=/jdk

PATH=$PATH:$JAVA_HOME:$CLASS_HOME
export PATH

source .bashrc
```




## 命令解释器
### Windows
- cmd
- powershell

### Linux
- sh
- zsh
- bash

### Unix （类UNIX）
- zsh
- bash
- sh

## 什么是环境变量
环境变量就是存在电脑上的一个全局的变量

## 环境变量分类
- 用户级别的环境变量（用户变量）
- 系统级别的环境变量（系统变量）

## 环境变量举例
``` shell
env
```

- PWD 当前目录
- HOME 家目录

## PATH变量
我们每次在终端输入一条指令，就会自动的在PATH变量保存的所有目录中去寻找这个指令的可执行文件。

## 设置环境变量
zsh
``` shell
cd ~

vim .zshrc

DEMO=2222

export DEMO

source .zshrc

env
```

bash
``` shell
cd ~

vim .bashrc

export DEMO=3333

source .bashrc
```