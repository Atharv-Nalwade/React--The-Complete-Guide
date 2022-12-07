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
