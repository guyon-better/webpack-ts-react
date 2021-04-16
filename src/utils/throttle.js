// export default function throttle(func, waitTime) {
//     let timer, args, result;
//     let preTime = 0;
//     const now = () => new Date().getTime()
  
//     let later = () => {
//       preTime = now();
//       timer = null;
//       result = func.apply(this, args);
//       if (!timer) {
//         args = null;
//       }
//     };
  
//     let throttled = (..._args) => {
//       let _now = now();
//       if (!preTime) {
//         preTime = _now;
//       }
//       let passedTime = now() - preTime;
//       let remaining = waitTime - passedTime
//       args = _args;
//       if (remaining <= 0 || remaining > waitTime) {
//         if (timer) {
//           clearTimeout(timer);
//           timer = null;
//         }
//         preTime = _now;
//         result = func.apply(this, args);
//         if (!timer) {
//           args = null;
//         }
//       } else if (!timer) {
//         timer = setTimeout(later, remaining);
//       }
//       return result;
//     };
  
//     return throttled;
//   }

  export default function throttle(func, waitTime, options = {}) {
    let timer, args, result;
    let preTime = 0;
    const now = () => new Date().getTime()
  
    let later = () => {
      preTime = options.leading === false ? 0 : now();
      timer = null;
      result = func.apply(this, args);
      if (!timer) {
        args = null;
      }
    };
  
    let throttled = (..._args) => {
      let _now = now();
      if (!preTime && options.leading === false) {
        preTime = _now;
      }
      let remaining = waitTime - (_now - preTime);
      args = _args;
      if (remaining <= 0 || remaining > waitTime) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        preTime = _now;
        result = func.apply(this, args);
        if (!timer) {
          args = null;
        }
      } else if (!timer && options.trailing !== false) {
        timer = setTimeout(later, remaining);
      }
      return result;
    };
  
    throttled.cancel = function() {
      clearTimeout(timer);
      preTime = 0;
      timer = args = null;
    };
  
    return throttled;
  }

  // export default function throttle(func, waitTime, options = {}) {
  //   let timer, args, result;
  //   let preTime = 0;
  //   const now = () => new Date().getTime()
  
  //   let later = () => {
  //     preTime = options.leading === false ? 0 : now();
  //     timer = null;
  //     result = func.apply(this, args);
  //     if (!timer) {
  //       args = null;
  //     }
  //   };
  
  //   let throttled = (..._args) => {
  //     let _now = now();
  //     if (!preTime && options.leading === false) {
  //       preTime = _now;
  //     }
  //     let remaining = waitTime - (_now - preTime);
  //     args = _args;
  //     if (remaining <= 0 || remaining > waitTime) {
  //       if (timer) {
  //         clearTimeout(timer);
  //         timer = null;
  //       }
  //       preTime = _now;
  //       result = func.apply(this, args);
  //       if (!timer) {
  //         args = null;
  //       }
  //     } else if (!timer && options.trailing !== false) {
  //       timer = setTimeout(later, remaining);
  //     }
  //     return result;
  //   };
  
  //   throttled.cancel = function() {
  //     clearTimeout(timer);
  //     preTime = 0;
  //     timer = args = null;
  //   };
  
  //   return throttled;
  // }