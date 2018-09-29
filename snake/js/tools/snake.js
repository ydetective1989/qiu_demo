function createSnake(){
  var snakeArr = [];
  var snakeHead = {};
  snakeHead.left = Math.round(Math.random()*10)*50;
  snakeHead.top = Math.round(Math.random()*10)*50;
  if(snakeHead.left + 10 > 500){
    snakeHead.left = 490;
  }
  if(snakeHead.top + 10 > 500){
    snakeHead.top = 490;
  }
  snakeArr.push(snakeHead);
  return snakeArr;
}

function showSnake(snakeArr,snakeDiv){
  var str = "";
  snakeArr.forEach(function(ele,index){
    snakeDiv[index].style.left = ele.left + "px";
    snakeDiv[index].style.top = ele.top + "px";
  })
}
