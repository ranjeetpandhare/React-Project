// import redux
const redux=require('redux')
// create store
const createStore=redux.createStore

// to define constant
//action------------------------------------







const BUY_CAKE='BUY_CAKE'
// create action
function buyCake(){
    return{
        type:"BUY_CAKE",
        info:"Redux-app"
    }
}
//reducer-------------------------------------
const initalState={
    numOfCakes:10
}
const reducer=(state=initalState,action)=>{
    // used switch case
    switch(action.type){
        case BUY_CAKE:return{...state,numOfCakes:state.numOfCakes-1}
        default:return state
    }

}

//store------------------------------------
// const store=redux.createStore(reducer) or
const store=createStore(reducer)
console.log("initial state",store.getState())
console.log("update state",store.getState())
const unsubscribe=store.subscribe(()=>{console.log("subscribe update state",store.getState())})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()
