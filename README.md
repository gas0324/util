# util

> js工具函数


## 安装
```shell
npm install --save @gas0324/util
```

## FUNCTION

| 名称         | 说明           | 参数                                                         |
| :-:          | :-:            | :-:                                                          |
| unlineToHump | 下划线转驼峰   | str: string                                                  |
| humpToUnline | 驼峰转下划线   | str: string                                                  |
| typeOf       | 返回数据类型   | val: any                                                     |
| extname      | 获取文件扩展名 | fileName: string                                             |
| isEmpty      | 判断是否空值   | val: any                                                     |
| formatToTree | 递归分组       | ary: any[], pid?: string/number, pField: string = 'parentId' |