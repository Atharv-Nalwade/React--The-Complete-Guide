What are side effects in React example?
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.


Take a read: https://www.w3schools.com/react/react_useeffect.asp

Local Storage
---The localStorage object allows you to save key/value pairs in the browser.
---The localStorage object stores data with no expiration date.
---The data is not deleted when the browser is closed, and are available for future sessions.
---The sessionStorage Object which stores data for one session.
---(The data is deleted when the browser window is closed)
---Save Data to Local Storage --->localStorage.setItem(key, value);


To check that Dev Tools -> Application -> Storage -> Local Storage -> http:localhost
![Screenshot (142)](https://user-images.githubusercontent.com/98139553/206268038-01fdb6af-20f4-4bc2-be0e-97ae8f42e3e5.png)

IMP for UseEffect : https://dmitripavlutin.com/react-useeffect-explanation/#:~:text=useEffect(callback%2C%20dependencies)%20is,being%20props%20or%20state%20values.
![Screenshot (143)](https://user-images.githubusercontent.com/98139553/206268222-fe3e4852-7f35-40dc-8a8a-60eb07c7cc0d.png)

In dependencies of useEffect we state things which on change should make the useEffect run again typically props, data changed

```
You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

That is correct, but there are a few exceptions you should be aware of:

You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

So long story short: You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

Here's a made-up dummy example to further clarify the above-mentioned scenarios:

import { useEffect, useState } from 'react';
 
let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
In this example:

timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change
```


---Initially loads (is initially created).
Unmount is when a component
unloads (is destroyed).
The phase you didn't mention,
is the (in-between) update phase.
When a mounted component updates.
The updating functional component
is technically destroyed & re-created,
but the update phase is different than
the mount & unmount phases.

CleanUp Function :
---https://daily-dev-tips.com/posts/react-useeffect-cleanup/
```
  useEffect( () => {
    console.log("ji");
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );

  },[enteredEmail,enteredPassword])
  ```
  --- Above function will run on evry keystroke which is not appropriate instead what we want to is wait for certain period of time and then check for the validity           this is called debouncing this can be done using setTimeout func. but it also logs all only after a delay
  ```
  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
          console.log("Check for validity");
    }, 1000);
  }, [enteredEmail, enteredPassword]);
  
  O/P: 6 Checking for Validity
  ``` 
  Output is same as prev code but only with slight delay
  To do that we clear the prev timer and the new timer will run instead of it , as long as user i styping we clear all other timers and only timer is running 
  
  The 1st argument of cleanUP function is the function that executes and if we retun a function from that function tha is cleanup function 
  It does not run on very first run of useEffect i.e first render but it runs before the component is unmounted or mounted or change in comp. i.e before the UseEffect   runs
  
  The clearTimeout() method clears a timer set with the setTimeout() method.
  
  ```
    useEffect(() => {
    // console.log("hi");
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
      console.log("Checking for Validity");
    }, 1000);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
  ```
  Here if we type very fast we see that many keystroke's number = NO. of times CLEANUP is printed but checking for validity is printed only once 
 -- What we do is when we type singlee letter a setTimeout runs and it will be prinitng checking for validity but if we type before the timeout-time then the cleanup function before next time useEffect runs it will clear the timer and agiain it will start from zero so the point where " Checking for validty" would not be easily reached as we are typing before that timeout time so we would have "checking for validity" only after we stop typing or type after 1000ms gap 
 
--- Imp in sending reuqtes to server 

useReducer:
1) Use it when we have many states and they are workign towrds same thing 
2) Complex state logic
3) When we nned to update state based on other states 

![useReducer 2](https://user-images.githubusercontent.com/98139553/206369492-6c48a949-c85a-4944-948d-f8090d2af871.png)
![useReducer 1](https://user-images.githubusercontent.com/98139553/206369525-f49cbf4e-f29b-4ea4-944f-3d887fef66a3.png)


Context
--- React Context is cretae connection to component which needs the data and avoid long props chain

-- to use it we should wrap the ele. that should or can access it or listen to it
--- It does not create a component but it creates a object and that object is what we wrap
--- Also what we do is whilew wrapping what we do is eg. obj is AuthContext then we wrap by <AuthContext.Provider><---/> by that all components wrapped inside and their descendants can also listen to it
--- AuthContext.Provider is a component
--- To get acces to listen to value we use .Consumer
---The provider is used to create a context that can be consumed. The consumer is used to consume the nearest provided context. Note that you can provide the same context many times through your application, and you can even provide the same context nested.
--- <AuthCOntext.Consumer>
{ (contextData) => {
                    return( code that should have access to the data) 
                   }
}
--- .Consumer takes a child function whihc gtes context as an argument by react we do not have to pass it
--- If we hvae only default value in CreateContext then we do not nned .Provider we only need Consumer works as we do not have to provide anything down we hhave tojust use it so if only default then no Provider
--- Above statement is when we are using the default value by consumer
---The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
---All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.
--- To set value dynamically eg. <value={{isLoggedIn:statevalue from useState 1st argument}}

```
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
Exmaple from react docs

const value = useContext(MyContext);
Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

To se tdynamic context value we can set key: function pointer ( i.e name of function without pointer) and in som eother place we say ctxData.funcPointer  to exxecute the function in the definned place 

It is good practice to add function key value pair in our default context provoder for IDE autocommpletion there we dummy a dummy func. which does nothing eg onLogout: () => {}


React Context Limitations:
1) Not optimized for high frequency changes
2) Shouldnt be used to replace all communications or props
