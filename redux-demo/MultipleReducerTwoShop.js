// import redux
const redux=require('redux')
//import redux logger
const reduxLogger=require('redux-logger')
// create store
const createStore=redux.createStore
const combineReducers=redux.combineReducers

const logger=reduxLogger.createLogger()
const applyMiddleWare=redux.applyMiddleware

// to define constant
//action------------------------------------
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
// create action
function buyCake(){
    return{
        type:"BUY_CAKE",
        info:"Redux-app"
    }
}
function buyIceCream(){
    return{
        type:"BUY_ICECREAM",
        info:"Redux-app"
    }
}
// multiple reducer-------------------------------------
const initalCakeState={
    numOfCakes:10,
}
const initalIceCreamState={
    numOfIceCream:20
}
const CakeReducer=(state=initalCakeState,action)=>{
    // used switch case
    switch(action.type){
        case BUY_CAKE:return{...state,numOfCakes:state.numOfCakes-1}
        default:return state
    }
}
const IceCreamReducer=(state=initalIceCreamState,action)=>{
    // used switch case
    switch(action.type){
        case BUY_ICECREAM:return{...state,numOfIceCream:state.numOfIceCream-1}
        default:return state
    }
}
//always return single reducer function and used key value paired
const rootReaducer=combineReducers({cake:CakeReducer,icecream:IceCreamReducer})

//store------------------------------------
// const store=redux.createStore(reducer) or
const store=createStore(rootReaducer,applyMiddleWare(logger))
console.log("initial state",store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
//to call iceCream shop
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


unsubscribe()
