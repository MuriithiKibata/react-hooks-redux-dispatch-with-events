// add code snippets from README
let state;

function reducer(state= {count: 0}, action) {
    switch(action.type) {
        case "counter/increment":
          return {count: state.count + 1}
            break
            default:
                return state
    }
}

function dispatch(action) {
    state = reducer(state, action)
 
}

function render() {
    let cont = document.getElementById("container");
    cont.textContent = state.count;
    dispatch({ type: "counter/increment"});
}

document.getElementById("button").addEventListener("click", render);

