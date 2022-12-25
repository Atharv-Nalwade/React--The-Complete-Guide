.fetch() is a inbulit method, The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.<br/>
--fetch returns a promise whch can either be completed or not be completed it has 2 methods on it one is .then() method to define what happens when promise is fullfilled and other is .catch() which handles if promise is not fulllfiled <br/>
--in then method it gives us response and to get it in json format  we use .json() method on it <br/>
-- The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON
