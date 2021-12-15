# none

使用 [nestJs](http://nestjs.com/) 搭建后端服务，记录一下乱七八糟的学习用到的 代码片段/demo

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 项目结构

├── node_module  
├── test  
├── dist  
├── src  
│   ├── database  
│   │  
│   ├── core  
│   │   ├── guard  
│   │   ├── interceptor  
│   │   ├── middleware  
│   │   └── service  
│   │  
│   ├── routes  
│   │   ├── index  
│   │   └── login  
│   │  
│   ├── logs  
│   │  
│   ├── views  
│   │  
│   └── shared  
│       ├── pipe  
│       ├── filter  
│       └── utils  
│  
├── nest-cli.json  
├── tsconfig.json  
├── tsconfig.build.json  
└── README.md  
