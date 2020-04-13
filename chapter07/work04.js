let numbers = [3,6,5,8,9,2];

// filter 条件を満たす特定の要素を返す
let even = numbers.filter(value => {
    return value % 2 == 0;
});

console.log(even);
