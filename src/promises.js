var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fn1 = () => new Promise((resolve, reject) => {
    resolve(11);
});
const augment = (fn) => () => fn()
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
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield fn2();
        console.log(x);
    });
})();
//# sourceMappingURL=promises.js.map