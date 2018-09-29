function eat(snakeArr,food,content,forWord,count,score){
  var len = snakeArr.length - 1;
  if(food.left == snakeArr[0].left && food.top == snakeArr[0].top){
    count += 1 ;
    var snakeBody = document.createElement('div');
    snakeBody.className = 'snake';
    content.appendChild(snakeBody);
    var newBody = {};
    if(forWord == 'left'){
      newBody.left = snakeArr[len].left + 10;
      newBody.top = snakeArr[len].top;
    }
    if(forWord == 'right'){
      newBody.left = snakeArr[len].left - 10;
      newBody.top = snakeArr[len].top;
    }
    if(forWord == 'up'){
      newBody.left = snakeArr[len].left;
      newBody.top = snakeArr[len].top + 10;
    }
    if(forWord == 'down'){
      newBody.left = snakeArr[len].left;
      newBody.top = snakeArr[len].top - 10;
    }
    snakeArr.push(newBody);

    score.innerHTML = count;
    newfood = createFood(snakeArr);
    food.left = newfood.left;
    food.top = newfood.top;
    showFood(food);
    console.log(count);

  }
}
