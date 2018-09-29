function filterBySex(arr){
  if(store.getType('sex') == 'a'){
    return arr;
  }else{
    var newarr = arr.filter(function(ele){
      return ele.sex == store.getType('sex');
    })
    return newarr;
  }
}
