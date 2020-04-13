let numbers = [5, 9, 12, 8, 20, 11];

// find 条件を満たす配列の最初の要素を返す
let result  = numbers.find(value => {
    // 10以上の要素を返す
    return value >= 10;
});

console.log(result);
