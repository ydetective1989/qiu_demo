function combineFilter(config){
  return function(data){
    for(var prop in config){
      var data = config[prop](data,store.getType[prop]);
    }
    return data;
  }
}
var lastFilterArr = combineFilter({
  text:filterByText,
  // age:filterByAge,
  sex:filterBySex
});
