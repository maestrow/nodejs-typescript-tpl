const fn1 = () =>
  new Promise<number>((resolve, reject) => {
    resolve(11);
    // reject();
  });

const augment = (fn: () => Promise<number>) => () =>
  fn()
    .then(res => {
      if (res > 10) {
        console.log("Greater than 10");
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
