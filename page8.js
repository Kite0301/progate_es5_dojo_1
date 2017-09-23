var scores = [72, 93, 85, 68];
console.log("scores: " + scores);

// この下にコードを書いてください

// 点数の合計値を入れるための変数
var sum = 0;
for (var i = 0; i < scores.length; i++) {
  // 各点数をsumに足していく
  sum += scores[i];
}
// 合計値/個数で平均点を算出
var avg = sum / scores.length;
console.log("平均点は" + avg + "点です");
