function createFood(snakeArr){
  var food = {};
  food.left = Math.round(Math.random()*10)*50;
  food.top = Math.round(Math.random()*10)*50;
  if(food.left + 10 > 500){
    food.left = 490;
  }
  if(food.top + 10 > 500){
    food.top = 490;
  }
  snakeArr.forEach(function(ele){
    if(ele.left == food.left && ele.top == food.top){
      return createFood(snakeArr);
    }
  })
  return food;
}

function showFood(food){
  var foodDiv = document.getElementsByClassName('food')[0];
  foodDiv.style.left = food.left + "px";
  foodDiv.style.top = food.top + "px";
}
