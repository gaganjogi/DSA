use props they are like functional arguments sent to the component config driven ui

destructure the props like {name, age} = props

use map to list through the array elements

key props each child in the list should have this 

so why keys?
lot of children rc cards
render cycles
if new card is added it will re render all the cards so we should have a key 
so it will hit the performance hit issue 

so use like list.map((index,res)=>{
    Functional component with key prop  
})

named export {useState, useEffect}

// export useState =
// export use Effect =

make write less code to make erverything easy here right

keep in mind the folder structure components in components folder 
mock data constants in utils directory 

make app dynamic?
like if making like the button to have to check top rating resturants

when getting the data list of resturants it is showing what is having in that array
but we need to change that using 

listOfRest = listOfRest.filter((res)=>res.data.avgRating > 4)

in this data will be filtered by ui did not update the original data

ui layer and data layer should update together 

but listofR is normal js variable there is no super power for that this is where hooks came up

HOOKS- state variables hook is also normal js function

useState - powerful state variables
useEffect - side effects like api calls

maintain state of the variables

we can modify this by function of that state variables

like this 

const[listofRes,setlistofRes]=useState([])

automatically 
whenever state variable changes it is re rendering the component

as when DATA changes react re render the UI layer make DOM operation that what makes faster

React uses reconciliation algorithm that is what called react fiber


react creates virtual DOM of 7 res cards virtual dom is representation of actual DOM is nothing but object creates object of 7 cards


Diff algorithm means comparing the virtual DOM with previous virtual DOM and find the changes and update the actual DOM on every render cycle 

checking diff between the objects is fast if changes is there so will give more changes and very very fast 

react efficient dom manipulation 