var height = 1.7;
console.log("height: " + height);
var weight = 60;
console.log("weight: " + weight);

// この下にコードを書いてください

// Instruction 1
var bmi = weight / height / height;
console.log("BMIは" + bmi + "です");

// Instruction 2
var idealWeight = height * height * 22;
console.log("適正体重は" + idealWeight + "kgです");

// NOTE: 前ページを引き継ぐ

if (bmi < 18.5) {
  console.log("痩せ気味です");
} else if (bmi < 25) {
  console.log("普通です");
} else {
  console.log("肥満気味です");
}
