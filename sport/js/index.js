
var img = [
  "./src/4.jpg",
  "./src/5.jpg",
  "./src/6.jpg",
  "./src/7.jpg",
  "./src/8.jpg",
  "./src/4.jpg",

];

var n = document.getElementsByClassName('sliderWrapper')[0];
setTimeout(n.createTurnPage(img),2000);






// var sc = document.createElement('script');
// sc.src = "./js/tools.js";
// document.body.appendChild(sc);
//   sc.onload =  function(){
//     var disX ;
//     var disY ;
//     var lastX = parseInt(getStyle(line,'left'));
//     var lastY = parseInt(getStyle(line,'top'));
//     var iSpeedX = 0;
//     var iSpeedY = 0;
//     var newLeft;
//     var newTop;
//     n.onmousedown = function(e){
//       clearInterval(n.timer);
//       var e = e || window.event;
//       disX = e.pageX - parseInt(getStyle(n,'left'));
//       disY = e.pageY - parseInt(getStyle(n,'top'));
//       document.onmousemove = function(e){
//         newLeft = e.pageX - disX;
//         newTop = e.pageY - disY;
//         iSpeedX = (lastX - newLeft)*0.8 ;
//         lSpeedY = (lastY - newTop)*0.8;
//         console.log(iSpeedY )
//         n.style.left = newLeft + "px";
//         n.style.top = newTop + "px";
//       }
//       document.onmouseup = function () {
//         document.onmousemove = null;
//         document.onmouseup = null;
//         gMove(n,iSpeedX,iSpeedY)
//
//       }
//     }
//     // gMove(n,40,40);
//   }
//
// // startMove(n,{opacity:0.2,left:400})
