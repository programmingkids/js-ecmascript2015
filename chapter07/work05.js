let numbers = [3,6,5,8,9,2];

// map 配列の要素に繰り返し処理を適用、その結果から新しい配列を生成
let triple = numbers.map(value => {
    // 要素を3倍にする
    return value * 3;
});

console.log(triple);
