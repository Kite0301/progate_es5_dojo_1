// while文を用いた場合の模範解答
var i = 1;
while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) { // iが3の倍数かつ5の倍数の時
    console.log('FizzBuzz');
  } else if (i % 3 == 0) { // iが3の倍数の時
    console.log('Fizz');
  } else if (i % 5 == 0) { // iが5の倍数の時
    console.log('Buzz');
  } else {
    console.log(i);
  }
  i++;
}

// for文を用いた場合の模範解答
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) { // iが3の倍数かつ5の倍数の時
    console.log('FizzBuzz');
  } else if (i % 3 == 0) { // iが3の倍数の時
    console.log('Fizz');
  } else if (i % 5 == 0) { // iが5の倍数の時
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
