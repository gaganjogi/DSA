as we pass the callback to some other function so why callback in which it is passed later that function will be called in that passed function in which function this will be passed

due to this callback js can do async operation

all should execute in callstack 

we should never block main thread


create eventListeners
document.addEventListener('click', function callback(){
    console.log('click')
})


eventListners will take more memory so not good for closure

so removed eventListeners after use