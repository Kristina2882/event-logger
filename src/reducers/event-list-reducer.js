const reducer = (state = {}, action) => {
  const {name, description, numberOfEvent, id} = action;
  switch (action.type) {
 case('ADD_EVENT'):
 return Object.assign({}, state, {
    [id] : {
        name: name,
        description: description,
        numberOfEvent: numberOfEvent,
        id: id
    }
 });
 case ('DELETE_EVENT'):
    let newState = {...state};
    delete newState[id];
    return newState;

 default:   
 return state;
  }
}

export default reducer;