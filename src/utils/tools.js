/*
 * @Author: Hancock Tong
 * @Date: 2018-05-20 21:49:51
 */


// 歌词格式化
const parseLyric = (text) => {
  const lines = text.split('\r\n');


  const pattern = /\[\d{2}:\d{2}.\d{2}\]/g;


  const result = [];
  // 去掉数组中最后的空白;
  lines[lines.length - 1].length === 0 && lines.pop();

  lines.map((ele) => {
    const time = ele.match(pattern);


    const value = ele.replace(pattern, '');
    time.map((e) => {
      const t = e.slice(1, -1).split(':');
      result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
    })
  });

  // 最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词;
  result.sort((a, b) => a[0] - b[0]);
  return result;
};
// 时间转换秒数
const formatTime = (timeTemp) => {
  const m = Math.floor(timeTemp / 60);
  const s = Math.floor(timeTemp % 60);
  return `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
};
// 时间戳转时间格式
const getLocalTime = nS => new Date(parseInt(nS) * 1000).toLocaleString('chinese', { hour12: false }).replace(/\//g, '-');
// 数组去重
const unique = (arr) => {
  const res = [];
  const json = {};
  for (let i = 0; i < arr.length; i++) {
    if (!json[arr[i]]) {
      res.push(arr[i]);
      json[arr[i]] = 1;
    }
  }
  return res;
};
export { parseLyric, formatTime, getLocalTime, unique };
