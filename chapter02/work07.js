// オブジェクト作成（連想配列ともいう）
var Player = {
    name : "Chip",
    job : "Fighter",
    age : 19,
    // メソッド作成
    getName : function() {
        return "I am " + this.name;
    },
    // メソッド作成
    getJob : function() {
        return "My job is " + this.job;
    },
};

// プロパティの利用
console.log(Player.name);
console.log(Player.age);
console.log(Player.job);
// メソッド呼び出し
console.log(Player.getName());
console.log(Player.getJob());
