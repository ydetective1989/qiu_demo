function move(snakeArr, food, snakeDiv, forWord) {
  var len = snakeArr.length - 1;
  for (var i = len; i > 0; i--) {
    snakeArr[i].left = snakeArr[i - 1].left;
    snakeArr[i].top = snakeArr[i - 1].top;
  }
  if (forWord == 'left') {
      snakeArr[0].left -= 10;
      showSnake(snakeArr, snakeDiv);
      showFood(food);
  }
  if (forWord == 'right') {
      snakeArr[0].left += 10;
      showSnake(snakeArr, snakeDiv);
      showFood(food);
  }
  if (forWord == 'up') {
      snakeArr[0].top -= 10;
      showSnake(snakeArr, snakeDiv);
      showFood(food);
  }
  if (forWord == 'down') {
      snakeArr[0].top += 10;
      showSnake(snakeArr, snakeDiv);
      showFood(food);
  }
}


function collision(snakeArr,timer){
  if(snakeArr[0].left > 490 || snakeArr[0].left < 0 || snakeArr[0].top < 0 || snakeArr[0].top > 490){
    clearInterval(timer);
    alert('游戏结束');
  }
  for(var i = 1 ;  i < snakeArr.length ; i ++){
    if(snakeArr[0].left == snakeArr[i].left && snakeArr[0].top  == snakeArr[i].top){
      clearInterval(timer);
      alert('游戏结束');
    }
  }

}
