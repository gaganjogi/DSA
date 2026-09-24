if no dependency array = useEffect is called on every render
if empty array = render just once

if dependency array = render when dependency changes

always inside the component and not inside conditional context

react router - for navigation between pages

createBrowserRoute will takes list of routes

 will create path and element
route provider
 router provider have error element also  useError

 if make header intact so we can make the children routes
 like we use children:[{
    path:"",
    element:<></>
 }]    

 we use Outlet to render the children routes

 link component will use as <Link to="/"></Link>
 it did not reload the page only change the component

 client side routing - already there in the browser
  and server side routing


  use params to read the dynamic id from the routes

  after on click i take the resId and add it there like this
  <Link to={`/restaurant/${resId}`}></Link>

  and for the rescards we need to wrap them like this 
  <Link to ='/restaurant'><ResCard></ResCard></Link>

  so it will not refresh SPA


  use custom hooks same like function clean code that is the reason to fetch data that is the reason to create custom hooks

  fetch and display example data 

  use broswer to set online or offline and we can reuse the hooks

  parcel is as bundling tool 

  size of js will increase so here bundling concept comes in picture

  chunking code splitting dymanic bundling make various bundles lazy loading on demand loading

  like this lazy(() => import("./component"))

  for that component we got new component like on demand only it loads 

  suspense wrap the component inside it <Suspense fallback={ <div>Loading...</div>} ><Component></Suspense>