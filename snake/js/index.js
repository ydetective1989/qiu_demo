Array.prototype.myReduce = function(func){
     var _arr = this , len = _arr.length , init = arguments[1]||_arr[0] ;
     for(var i = 0 ; i < len ; i ++){
        init = func(init,_arr[i],i,_arr);
     }
     return init;
}
var init = (function(){
  var content = document.getElementsByClassName('content')[0];
  var snakeDiv = document.getElementsByClassName('snake');
  var score = document.getElementsByClassName('count')[0];
  var snakeArr = createSnake();
  var food = createFood(snakeArr);
  var timer;
  var upLock = true;
  var downLock = true;
  var leftLock = true;
  var rightLock = true;
  var count = 0;
  return function(){
    showFood(food);
    showSnake(snakeArr, snakeDiv);
    window.onkeydown = function(e) {
      if (e.keyCode == 38) { //上
        if(upLock){
          clearInterval(timer);
          upLock = false;
          downLock = false;
          leftLock = true;
          rightLock = true;
          timer = setInterval(function(){
            move(snakeArr, food, snakeDiv, 'up');
            collision(snakeArr,timer);
            eat(snakeArr,food,content,'up',count,score);
          },100)
        }

      }
      if (e.keyCode == 40) { //下
        if(downLock){
          clearInterval(timer);
          upLock = false;
          downLock = false;
          leftLock = true;
          rightLock = true;
          timer = setInterval(function(){
            move(snakeArr, food, snakeDiv, 'down');
            collision(snakeArr,timer);
            eat(snakeArr,food,content,'down',count,score)
          },100)
        }

      }
      if (e.keyCode == 37) { //左
        if(leftLock){
          clearInterval(timer);
          upLock = true;
          downLock = true;
          leftLock = false;
          rightLock = false;
          timer = setInterval(function(){
            move(snakeArr, food, snakeDiv, 'left');
            collision(snakeArr,timer);
            eat(snakeArr,food,content,'left',count,score)
          },100)
        }

      }
      if (e.keyCode == 39) { //右
        if(rightLock){
          clearInterval(timer);
          upLock = true;
          downLock = true;
          leftLock = false;
          rightLock = false;
          timer = setInterval(function(){
            move(snakeArr, food, snakeDiv, 'right');
            collision(snakeArr,timer);
            eat(snakeArr,food,content,'right',count,score)
          },100)
        }
      }
    }
  }
}())
