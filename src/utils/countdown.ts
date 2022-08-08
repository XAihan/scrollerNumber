class countdownClass {

  countdownStr: string
  afterCancelCb: Function
  format: string
  countDownNum: number
  /**
   *
   * @param {number} second // 需要倒计时的秒数
   * @param {*} afterCancelCb // 倒计时结束时触发的事件
   * @param {*} format // 时间格式
   */
  constructor(second: number, afterCancelCb: Function, format = '') {
    this.countdownStr = this.formatDate(second, format);
    this.afterCancelCb = () => { };
    this.format = format;
    this.countDownNum = second;
    this.afterCancelCb = afterCancelCb;
  }

  // 开始倒计时
  start() {
    this.mySetInterval(
      () => {
        this.countdownStr = this.formatDate(this.countDownNum--);
      },
      () => {
        return this.countDownNum < 0;
      },
      this.afterCancelCb
    );
  }

  // 对事件进行修改
  /**
   *
   * @param {number} second 需要转换的秒数
   * @param {*} format  转换的格式
   * @returns
   */
  formatDate(second: number, format = 'd h:m:s') {
    format = this.format ? this.format : format;
    second = Number(second);
    let sec = 1,
      min = 60 * sec,
      hour = 60 * min,
      day = 24 * hour;
    let formatObj: any = {
      d: (second / day),
      h: ((second % day) / hour),
      m: ((second % hour) / min),
      s: (second % min)
    };
    const time_str = format.replace(/(d|h|m|s)/g, (match) => {
      let value = formatObj[match];
      if (match && value < 10) {
        value = '0' + value;
      }
      return value || 0;
    });
    return time_str;
  }

  /**
   *
   * @param {number} interval  执行间隔，默认1s
   * @param {function} cb 间隔结束后执行的方法
   * @param {function} cancelCb 判断什么时候结束,返回值是布尔值，返回true则终止。
   */
  mySetInterval(cb: Function, cancelCb: Function, afterCancelCb: Function, interval = 1000) {
    let timer = null;
    let pre: any = new Date();
    let fn = function () {
      timer = requestAnimationFrame(() => {
        let cur: any = new Date();
        if (cur - pre >= interval) {
          cb();
          pre = cur;
        }
        timer = requestAnimationFrame(fn);
        if (cancelCb && cancelCb()) {
          afterCancelCb();
          timer && cancelAnimationFrame(timer);
        }
      });
    };
    fn();
  }
}

function countdown(second: number, afterCancelCb: Function, format: string) {
  return new countdownClass(second, afterCancelCb, format);
}

export { countdown };