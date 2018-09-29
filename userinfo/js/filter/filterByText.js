function filterByText(arr){
  if(store.getType('text') != ""){
      return arr.filter(function(ele){
        return ele.name.indexOf(store.getType('text')) != -1;
      })
    }else{
      return arr;
    }
}
// function filterByText(arr){
//   if(store.getType('text') != ""){
//     var reg = "[\u4e00-\u9fa5_a-zA-Z]+";
//     name = store.getType('text').match(reg);
//     if(name != "null"){
//       return arr.filter(function(ele){
//         return ele.name.indexOf(name) != -1;
//       })
//     }else{
//       return arr;
//     }
//   }else{
//     return arr;
//   }
// }
