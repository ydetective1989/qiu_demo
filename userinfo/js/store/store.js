function store(init){
  var state = init || {};
  var list = [];
  function getType(type){
    return state[type];
    // return state[type];
  }
  function dispatch(action){
    state[action['type']] = action['value'];
    list.forEach(function(ele){
         ele() ;
    })
  }
  function subcr (fun){
    list.push(fun)
  }
  return {
    getType : getType,
    dispatch : dispatch,
    subcr : subcr
  }
}

var store = store({text:"",sex:"a",age:""});
