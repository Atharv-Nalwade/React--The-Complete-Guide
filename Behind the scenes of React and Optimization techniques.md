The Place where state is managed that part is re-evaluated and changes are done by reactdom in real dom 

Child componets are also re-evaluated if parent componenets had any state changes or there was some re-evalaution needed

Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.

In this example, the Todos component re-renders even when the todos have not changed.
```
Example:
index.js:

import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```
Todos.js:
```
const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default Todos;

```
When you click the increment button, the Todos component re-renders.

If this component was complex, it could cause performance issues.

To fix this, we can use memo.

Use memoto keep the Todos component from needlessly re-rendering.

Wrap the Todos component export in memo:

Example:
index.js:
```
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
Todos.js:
```
import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
```

On re-render teh child comp. also re-render even if it had no changes

Also if it has data been passed ( to child ) if data doesn changes on change in parent it i sre-renderd  because when upadtion i sdone the function is destroyed and then created again and the data is passed for first time and so it re-renders

The React useCallback Hook returns a memoized callback function.

Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.

The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function

we can use the useCallback hook to prevent the function from being recreated unless necessary.

Use the useCallback Hook to prevent the Todos component from re-rendering needlessly

