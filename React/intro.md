react is nothing but a library not a framework

react we can just use cdn links to use in our project it can be used in any project as a part 

or we can just install using npm package manager as a dependencies 

package.json(update) vs package-lock.json (fixed)

use react.createElement to create an element (react)
react.createRoot to render (react dom)


to use import we need to make the file type as module

to build the react project and to server we use parcel 
to run and build the project

to transpile the jsx to - createElement-> object-> html-> and then to render babel will take care of this 


React component:- 
Class based and functional Component

const heading=(<h1>Hello world</h1>)
const Title=()=>{
    {
        we can execute any thing inside 
    }
    return <h1>Title</h1>
}

const Heading_comp=()=>{
    return (
        <Title/>. Component Composition
        <h1>Hello world</h1>
    )
}



functional component that returns the jsx

if we are doing nothing like 

const data=api.getData()

{data}. cross side scripting steal cookies / JSX will escape this 