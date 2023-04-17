/**
 * 下划线转驼峰
 * @param {string} str [description]
 */
export function unlineToHump(str: string): string {
  return str.replace(/\_(\w)/g, (_, letter) => letter.toUpperCase());
}

// 驼峰转下划线
export function humpToUnline(str: string ): string  {
  return str.replace(/([A-Z])/g,"_$1").toLowerCase();
}


/**
 * 数据类型
 * @param {any} val 数据类型
 */
export function typeOf(val: any): string {
  const s = Object.prototype.toString.call(val);
  // @ts-ignore
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}


/**
 * 获取文件扩展名
 * @param {string} fileName 文件名
 */
export function extname(fileName: string) {
  const index = fileName.lastIndexOf(".");
  if(index > -1)
    return fileName.substr(index+1);

  return 'unknow';
}


/**
 * 判断value是否空值
 * @param {any} val [description]
 */
export function isEmpty(val: any){
  return val === '' || val === undefined || val === null;
}


/**
 * 递归分组
 * @param {any[]}     ary 节点数组
 * @param {string | number}      pid    上级ID
 * @param {string = 'parentId'}  pField 上级字段
 * @returns 递归分组后的节点
 */
export function formatToTree(ary: any[], pid?: string | number, pField: string = 'parentId') {
  return ary
    .filter((item) =>
      // 如果没有父id（第一次递归的时候）将所有父级查询出来
      pid ? item[pField] === pid : isEmpty(item[pField])
    )
    .map((item) => {
      // 通过父节点ID查询所有子节点
      item.children = formatToTree(ary, item.id)
      return item
    })
}
