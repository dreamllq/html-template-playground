import { get } from 'lodash';

export const replaceTemplate = (str, data) => {
  // 原始字符串

  // 正则表达式：匹配 {{ ... }} 中的内容，支持空格
  const regex = /\{\{\s*([^}]+?)\s*\}\}/g;

  // 1. 提取所有 {{...}} 中的表达式
  const extracted = [];
  let match;

  // 使用正则匹配所有
  while ((match = regex.exec(str)) !== null) {
    extracted.push(match[1].trim()); // match[1] 是括号内的内容
  }

  // 输出: ['user.name', 'count', 'item.a']

  // 2. 替换 {{...}} 为实际值（例如使用一个数据对象）


  const replacedStr = str.replace(regex, (match, key) => {
    const k = key.trim();
    const val = get(data, k);
    return val !== undefined ? val : match; // 如果没有对应值，保留原样
  });

  return replacedStr;
};