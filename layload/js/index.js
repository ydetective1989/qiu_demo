var img_1 = [
  './src/1.jpg',
  './src/2.jpg',
  './src/3.jpg'
];
var img_2 = [
  './src/4.jpg',
  './src/5.jpg',
  './src/6.jpg'
];
var img_3 = [
  './src/7.jpg',
  './src/8.jpg',
  './src/9.jpg'
];
var img_arr = [];
var demo1 = document.getElementsByClassName("demo1")[0];
var demoarr = Array.prototype.slice.call(document.getElementsByClassName("demo1"));
var demo1_list = Array.prototype.slice.call(demo1.getElementsByClassName('loading'));
window.onscroll = function(){
  if((window.scrollY + window.innerHeight ) >  demo1.offsetTop){
    demoarr.forEach(function(value){
      var liarr = Array.prototype.slice.call(value.getElementsByTagName("li"));
      liarr.forEach(function(ele,index){
        var img = ele.getElementsByTagName('img')[0];
        img.src = img.getAttribute('origin');
      })

    })

}
}
