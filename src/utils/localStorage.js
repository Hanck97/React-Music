/*
 * @Author: Hancock Tong
 * @Date: 2018-05-20 10:54:32
 */
const getItem = (key) => {
  let value;
  try {
    value = localStorage.getItem(key);
  } catch (ex) {
    if (process.env.NODE_ENV === 'production') {
      console.error('localStorage.getItem报错, ', ex.message);
    }
  } finally {
    return value;
  }
};

const setItem = (key, value) => {
  try {
    // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
    localStorage.setItem(key, value)
  } catch (ex) {
    // 开发环境下提示 error
    if (process.env.NODE_ENV === 'production') {
      console.error('localStorage.setItem报错, ', ex.message)
    }
  }
};

export { getItem, setItem };
