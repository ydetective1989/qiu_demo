var personArr = [
  {name:"邱伟",des:'帅的不行',age:28,sex:'m',avtor:'./src/2.jpg'},
  {name:"刘明",des:'漂亮的不行',age:28,sex:'f',avtor:'./src/3.jpg'},
  {name:"邱勇",des:'疯狂打码',age:33,sex:'m',avtor:'./src/4.jpg'},
  {name:"李柯",des:'疯狂作图',age:28,sex:'f',avtor:'./src/5.jpg'},
  {name:"陈羽凡",des:'疯狂作图',age:24,sex:'f',avtor:'./src/6.jpg'},
  {name:"陈华",des:'疯狂写PPT',age:36,sex:'m',avtor:'./src/7.jpg'},
  {name:"高婕",des:'大高个',age:40,sex:'f',avtor:'./src/8.jpg'},
  {name:"许晨",des:'内敛技术男',age:39,sex:'m',avtor:'./src/9.jpg'},
  {name:"赵阳",des:'小鲜肉',age:7,sex:'m',avtor:'./src/10.jpg'},
  {name:"王梦娇",des:'金牌客服',age:25,sex:'f',avtor:'./src/11.jpg'}
];
var btn = document.getElementsByClassName('btn');
var newbtn = Array.prototype.slice.call(btn);
var ul = document.getElementsByTagName('ul')[0];
var skeywords = document.getElementsByClassName('swords')[0];
var select = document.getElementsByClassName('select_age')[0];

var listr = "";
var lastbtn = newbtn[2];
var sex = "a";
var sword = "";
var name = "";
var age = "";
var sage = "";
var selectage = {
  firstage : "",
  lastage : ""
  }
store.subcr(function(){
  renderPage(lastFilterArr(personArr))
});
newbtn.forEach(function(ele){
  ele.onclick = function(){
    lastbtn.className = 'btn';
    this.className = 'btn active';
    lastbtn = this;
    store.dispatch({type:"sex",value:this.getAttribute('sex')})
  }
})
skeywords.oninput = function(){
  store.dispatch({type:'text', value:this.value})
}

select.onchange = function (){
    selectage.lastage = parseInt(this.value);
    selectage.firstage = selectage.lastage - 9;
    var newarr = choseage(personArr,selectage.lastage);
    console.log(newarr);
    newarr = changesex(newarr,sex);
    newarr = searchname(newarr,sword)
    newarr = searchage(newarr,sword);
    renderPage(newarr);
}

function choseage(arr,value){
  if(value != ""){
    switch (value) {
      case 0:
       return arr;
      case 9:
       return arr.filter(function(ele){
         return ele.age <= 9 ;
       });
      case 40:
      return arr.filter(function(ele){
        return ele.age >= 40;
      });
      case 19 :
      return arr.filter(function(ele){
        return ele.age >=selectage.firstage && ele.age <= 19;

      });
      case 29 :
      return arr.filter(function(ele){
        return ele.age >=selectage.firstage && ele.age <= 29;

      });
      case 39 :
      return arr.filter(function(ele){
        return ele.age >=selectage.firstage && ele.age <= 39;

      });
        break;
    }
  }else{
    return arr;
  }
}


function renderPage(arr){
  arr.forEach(function (ele){
    listr += "<li class='list_content'><img src='" + ele.avtor + "'><p class='user_name'>" + ele.name + "</p><p class='user_des'>" + ele.des+ "</p><p class='user_age'>" + ele.age + "</p></li>"
  })
  ul.innerHTML = listr;
  listr = "";
}
renderPage(personArr);
