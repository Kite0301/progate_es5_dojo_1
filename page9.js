var scores = [72, 93, 85, 68];
console.log("scores: " + scores);

var sum = 0;
// 最高点を入れるための変数
var bestScore = 0;
for (var i = 0; i < scores.length; i++) {
  sum += scores[i];
  // bestScoreに入っている点数より大きければ
  if (scores[i] > bestScore) {
    // その点数でbestScoreを上書きする
    bestScore = scores[i];
  }
}

var avg = sum / scores.length;
console.log("平均点は" + avg + "点です");
console.log("最高点は" + bestScore + "点です");
