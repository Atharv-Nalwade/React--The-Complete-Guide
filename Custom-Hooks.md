to create cutsom hooks while writing the function name in .js file it has to start with use that tells react it is a custom hooks

When we import it in some place then we write useCustomHookName() and not like <useCompName/> we write it like state 

Eg like 
in function Comp(){
 useCounter()
}

when we import it and write it somehwre the component where it is called get its state attached to the componnet ( if we are using state in the custom hook) and all places where it is is called get its own state attached the state of hook are not shared 

We can return things from the custom hook we can w=return anything like number , object, state etc ( like const[x,setX]=useState(0)  we can return x } 
