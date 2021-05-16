const fn1 = (): Promise<number> =>
  new Promise<number>((resolve, reject) => {
    resolve(11);
    // reject();
  });

const augment = (fn: () => Promise<number>) => () =>
  fn()
    .then(res => {
      if (res > 10) {
        console.log(`${res} is greater than 10`);
      }
      return res;
    })
    .catch(err => {
      console.log("Error accured");
      throw err;
    });

const fn2 = augment(fn1);

(async function() {
  const x = await fn2();
  console.log(x);
})();

export {}; // Fixing a problem: "Cannot redeclare block-scoped variable". Source: https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206
