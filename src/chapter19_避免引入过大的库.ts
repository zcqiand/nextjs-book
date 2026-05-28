// 从第 19 章提取
// 代码清单: 避免引入过大的库
// 文件名: chapter19_避免引入过大的库.ts
// 避免引入过大的库
// 不好：import _ from 'lodash' // 完整引入

// 好：只引入需要的函数
import debounce from 'lodash/debounce';
import { format } from 'date-fns';
