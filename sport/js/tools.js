//自由落体弹性碰撞运动

function gMove(obj,iSpeedX,iSpeedY){//调用对象 left方向初始值  top方向初始值
  var g = 8;//重力加速度
  var newTop; //最后一次移动的top值
  var newLeft;//最后一次移动的left值
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    iSpeedY += g;
    newTop = parseInt(getStyle(obj,'top')) + iSpeedY;
    newLeft = parseInt(getStyle(obj,'left')) + iSpeedX;
    if(newTop >= document.documentElement.clientHeight - parseInt(getStyle(obj,'height'))){
      newTop = document.documentElement.clientHeight - parseInt(getStyle(obj,'height'));
      iSpeedY *= -1;
      iSpeedX *= 0.8;
      iSpeedY *= 0.8;
    }
    if(newTop <= 0){
      newTop = 0;
      iSpeedY *= -1;
      iSpeedX *= 0.8;
      iSpeedY *= 0.8;
    }
    if(newLeft >= document.documentElement.clientWidth - parseInt(getStyle(obj,'width'))){
      newLeft = document.documentElement.clientWidth - parseInt(getStyle(obj,'width'));
      iSpeedX *= -1;
      iSpeedX *= 0.8;
      iSpeedY *= 0.8;
    }
    if(newLeft <= 0 ){
      newLeft = 0;
      iSpeedX *= -1;
      iSpeedX *= 0.8;
      iSpeedY *= 0.8;
    }
    if(Math.abs(iSpeedX) < 1){
      iSpeedX = 0;
    }
    if(Math.abs(iSpeedY) < 1){
      iSpeedY = 0;
    }
    if(iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - parseInt(getStyle(obj,'height'))){
      clearInterval(obj.timer);
      newTop = document.documentElement.clientHeight - parseInt(getStyle(obs,'height'));
    }
    obj.style.left = newLeft + "px";
    obj.style.top = newTop + "px";
  },30)

}


// 弹性运动
function flexMove(obj, target, attr) {
  var iSpeed = 40;
  var a;
  var u = 0.8;
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    a = (target - parseInt(getStyle(obj, attr))) / 3;
    iSpeed += a;
    iSpeed *= u;
    if (Math.abs(iSpeed) <= 1 && Math.abs(target - parseInt(getStyle(obj, attr))) <= 1) {
      clearInterval(obj.timer);
      obj.style[attr] = target + "px";
    } else {
      obj.style[attr] = parseInt(getStyle(obj, attr)) + iSpeed + "px";
    }
  }, 40)

}
//缓冲运动
// arrtobj = {'width':200,'height':300,'opacity':0.3}
function startMove(obj, attrobj, callback) {
  var iSpeed;
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var iStop = true;
    for (var prop in attrobj) {
      if (prop === 'opacity') {
        iSpeed = (attrobj[prop] * 100 - parseFloat(getStyle(obj, prop)) * 100)/7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      } else {
        iSpeed = (attrobj[prop] - parseInt(getStyle(obj, prop))) /7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      }
      if(prop === 'opacity'){
        obj.style[prop] = parseInt(getStyle(obj,prop)) + iSpeed/100;
      }else{
        obj.style[prop] = parseInt(getStyle(obj,prop)) + iSpeed + "px";
      }
      if(parseInt(getStyle(obj,prop)) != attrobj[prop]){
        iStop = false;
      }
    }
    if(iStop){
      clearInterval(obj.timer);
      typeof callback == 'function' ? callback() : "";
    }
  }, 30)
}

function getStyle(obj, arrt) {
  if (obj.currentStyle) {
    return obj.currentStyle[arrt];
  } else {
    return getComputedStyle(obj, null)[arrt];
  }

}


//foeEach方法重写

Array.prototype.myForEach = function (fun){
  var _arr = this , len = _arr.length , that = arguments[1];
  for(var i = 0 ; i < len ; i ++){
    fun.call(that,_arr[i],i,_arr,that);
  }
}

//阻止冒泡
function stopBubble(event) {
  if(event.stopPropagation){
    event.stopPropagation();
  }else{
    event.cancelBubble = true;//IE独有
  }
}

//阻止默认事件
function cancelHandler(event){
  if(event.preventDefault){
    event.preventDefault();
  }else if(event.returnValue){
    event.returnValue = false; //兼容IE
  }else{
    return false;
  }
}

Document.prototype.getClass = function(_class){
  var docList = document.getElementsByTagName('*');
  var len = docList.length;
  var reg = /\s+/g;
  var rearr = [];
  for(var i = 0 ; i < len ; i ++){
    var str = docList[i].className.replace(reg," ").trim();
    var newarr = str.split(" ");
    for(var m = 0 ; m < newarr.length ; m ++){
      if(newarr[m] == _class){
        rearr.push(docList[i]);
      }
    }
  }
  return rearr;
}


//轮播图自动生成

HTMLDivElement.prototype.createTurnPage = function (json_img){
  var len = json_img.length;
  var timer ;
  //生成index按钮
  function createIndex(len){
    var strIndex = "";
    var indexarr = document.createElement('div');
    indexarr.className = 'indexarr';
    for(var i = 0 ; i < len - 1 ; i ++){
      strIndex += "<span class='index'></span>";
    }
     indexarr.innerHTML = strIndex;
     return indexarr;
  }

  function createLeftArrow(){
    var leftArrow = document.createElement('div');
    leftArrow.className = 'arrow left'
    leftArrow.innerText = '<';
    return leftArrow;
  }
  function createrightArrow(){
    var rightArrow = document.createElement('div');
    rightArrow.className = 'arrow right'
    rightArrow.innerText = '>';
    return rightArrow;
  }
  //生成图片li缓存
  function createSliderList(json_img,len){
    var str = "";
    json_img.forEach(function(ele,index){
      str += '<li class="sliderList"><img src="' + ele + '"></li>';
      len ++;
    })
    return str;
  }
  //生成轮播图区域
  function createSliderPage(json_img){
    var sliderPage = document.createElement('ul');
    sliderPage.className = 'sliderPage';
    var li_List = createSliderList(json_img,len);
    if(li_List != ""){
      sliderPage.innerHTML = li_List;
    }
    return sliderPage;
  }
  var sliderPage = createSliderPage(json_img,len);//生成轮播区域
  var arrowLeft = createLeftArrow();//生成左边箭头
  var arrowRight = createrightArrow();//生成右边箭头
  var indexarr = createIndex(len);//生成index
  this.appendChild(sliderPage);
  this.appendChild(arrowLeft);
  this.appendChild(arrowRight);
  this.appendChild(indexarr);
  var moveWidth = document.getElementsByClassName('sliderList')[0].offsetWidth;
  var indexList = document.getElementsByClassName('index');
  var index = 0;
  var lock = true;
  changeActive(index);
  var timer = setTimeout(autoMove,1000);
  // 当前index修改
  for(var i = 0 ; i < indexList.length ; i ++){
    (function(m){
      indexList[m].onclick = function(){
        lock = false;
        clearTimeout(timer);
        index = m;
        startMove(sliderPage,{left:-moveWidth*index},function(){
          lock = true;
          setTimeout(autoMove,1000);
          changeActive(index);
        })
      }
    }(i))
  }
  function changeActive(index){
    for(var i = 0 ; i < len - 1 ; i ++){
      indexList[i].className = 'index';
    }
    indexList[index].className = 'index active';
  }
  function autoMove(turnto){
    if(lock){
      lock = false;
      clearTimeout(timer);
      if(!turnto || turnto === 'left'){
        index ++;
        startMove(sliderPage,{left:sliderPage.offsetLeft - moveWidth},function(){
          if(sliderPage.offsetLeft == - moveWidth * (len - 1)){
            index = 0;
            sliderPage.style.left = 0 + "px";
          }
          lock = true;
          timer = setTimeout(autoMove,1000)
          changeActive(index);
        })
      }else if (turnto === 'right') {
        if(sliderPage.offsetLeft == 0){
          index = len - 1;
          sliderPage.style.left = - moveWidth*(len - 1) + "px";
        }
        index--;
        startMove(sliderPage,{left:sliderPage.offsetLeft + moveWidth},function(){
          lock = true;
          timer = setTimeout(autoMove,1000);
          changeActive(index);
        })
      }
    }
  }
  arrowLeft.onclick = function(){
    autoMove('right');

  }
  arrowRight.onclick = function(){
    autoMove('left');
  }
}
