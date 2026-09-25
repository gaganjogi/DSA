Higher order component

take a component and return a functional component

majorly data layer operations 

controlled compo - if parent sends
uncontrolled compo - if not controlled by any other parent compo

from parent to child possible not viceversa

lifting the state up - when we need to share the state between multiple components

props drilling - from parent to child we can send the data but it becomes difficult to manage when we have multiple levels of components

for global data we can use context API React context to prevent drilling

first we need to create a context and next we need to use them using useContext

and then to use everywhere we need to wrap our app inside userContext.Provider value provide to whole app for which one we want to share the data

how we are sending the value we can even send the setFunction also in the same way we need to import useContext(UserContext)

const {setName}= useContext(UserContext)


Redux store (data layer) first we need to check even if redux is mandatory or not 

react redux and react tool kit

RTK - redux store is complicated lot of packages redux requires too much boiler plate code


major data in the redux store we have slices in redux store (sections)

like cart slice user slice click on add button dispatch an action call a function (reducer function) and make an update in the slice - this is for to write

now to read data we use selectors and modify the ui (subscribing to the store)

rtk and react-redux
build store 
connect store 
create slice
dispatch action

configure store using toolkit
provider using react-redux

wrapping provider around app prop store={}

and then create a slice 
name of slice initial state reducer function add item(state,action)=>{
    state.items.push(action.payload)
}

useSelector hook to read the data from the store

useSelector((store)=> store.cart.items)