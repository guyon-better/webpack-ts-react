// export default function debounce(func, waitTime) {
//   let timer, preTime, args, result;
//   const now = () => new Date().getTime()
  
//   let later = () => {
//     let passedTime = now() - preTime;
//     if (waitTime > passedTime) {
//       timer = setTimeout(later, waitTime - passedTime);
//     } else {
//       timer = null;
//       result = func.apply(this, args);
//       // 这个检查是必需的，因为 func 可能递归调用 debounce
//       if (!timer) {
//           args = null;
//         }
//     }
//   };

//   let debounced = (..._args) => {
//     args = _args
//     preTime = now();
//     if (!timer) {
//         timer = setTimeout(later, waitTime);
//     }
//     return result;
//   }

//   return debounced;
// }

// export default function debounce(func, waitTime, immediate = true) {
//   let timer, preTime, args, result;
//   let now = () => new Date().getTime()
  
//   let later = () => {
//     let passedTime = now() - preTime;
//     if (waitTime > passedTime) {
//       timer = setTimeout(later, waitTime - passedTime);
//     } else {
//       timer = null;
//       if (!immediate) {
//         result = func.apply(this, args);
//       }
//       // 这个检查是必需的，因为 func 可能递归调用 debounce
//       if (!timer) {
//         args = null;
//       }
//     }
//   };

//   let debounced = (..._args) => {
//       args = _args
//       preTime = now();
//       if (!timer) {
//           timer = setTimeout(later, waitTime);
//           if (immediate) {
//             result = func.apply(this, args);
//           }
//       }
//       return result;
//   };

//   return debounced;
// }

export default function debounce(func, waitTime, immediate = true) {
  let timer, preTime, args, result;
  let now = () => new Date().getTime()
  
  let later = () => {
    let passedTime = now() - preTime;
    if (waitTime > passedTime) {
      timer = setTimeout(later, waitTime - passedTime);
    } else {
      timer = null;
      if (!immediate) {
        result = func.apply(this, args);
      }
      // 这个检查是必需的，因为 func 可能递归调用 debounce
      if (!timer) {
        args = null;
      }
    }
  };

  let debounced = (..._args) => {
      args = _args
      preTime = now();
      if (!timer) {
          timer = setTimeout(later, waitTime);
          if (immediate) {
            result = func.apply(this, args);
          }
      }
      return result;
  };

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = args = null;
  };

  return debounced;
}