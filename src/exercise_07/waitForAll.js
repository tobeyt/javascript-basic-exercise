export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  //
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  promises.forEach((cur) => {
    if (!(cur instanceof Promise)) {
      throw new Error("Not all elements are promises.");
    }
  });
  return new Promise((resolve, reject) => {
    let flag = true;
    let result = () => {
      if (flag) {
        resolve();
      } else {
        reject();
      }
    };
    promises.forEach((cur, index) => {
      cur.then(
        () => {
          if (index === promises.length - 1) {
            result();
          }
        },
        () => {
          flag = false;
          if (index === promises.length - 1) {
            result();
          }
        }
      );
    });
  });
}
