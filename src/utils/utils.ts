const dateUtil = {
  // /**
  //  *
  //  * **/
  // format(timestamp, dateFormat = 'YYYY-MM-DD') {
  //   const date = timestamp ? new Date(timestamp) : new Date();
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   const day = date.getDate();
  //   const hour = date.getHours();
  //   const minute = date.getMinutes();
  //   const second = date.getSeconds();
  // },

  /**
   * 格式化时间
   * @param {Date} time 时间
   * @param {String} format 格式化字符串
   * @returns
   */
  formatDate(time: any, format = 'y-M-d h:m:s') {
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string')) {
        if ((/^[0-9]+$/.test(time))) {
          // support "1548221490638"
          time = parseInt(time)
        } else {
          // support safari
          // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
          time = time.replace(new RegExp(/-/gm), '/')
        }
      }

      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj: any = {
      y: date.getFullYear(),
      M: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    };
    const weekDay = ['日', '一', '二', '三', '四', '五', '六'];
    const time_str = format.replace(/(y|m|d|h|M|s|a)/g, (match) => {
      let value = formatObj[match];
      if (match === 'a') {
        return weekDay[value];
      }
      if (match && value < 10) {
        value = '0' + value;
      }
      return value || 0;
    });
    return time_str;
  },



  /**
   *
   * @param {number} interval  执行间隔，默认1s
   * @param {function} cb 间隔结束后执行的方法
   * @param {function} cancelCb 判断什么时候结束,返回值是布尔值，返回true则终止。
   */
  mySetInterval(cb: Function, cancelCb?: Function, afterCancelCb?: Function, interval = 1000) {
    let timer = null;
    let pre: any = new Date();
    let fn = function () {
      timer = requestAnimationFrame(() => {
        let cur: any = new Date();
        if (cur - pre >= interval) {
          console.log(cur - pre);
          cb();
          pre = cur;
        }
        timer = requestAnimationFrame(fn);
        if (cancelCb && cancelCb()) {
          afterCancelCb && afterCancelCb();
          timer && cancelAnimationFrame(timer);
        }
      });
    };
    fn();
  }
};

export default dateUtil;
