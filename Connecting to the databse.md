.fetch() is a inbulit method, The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

--fetch returns a promise whch can either be completed or not be completed it has 2 methods on it one is .then() method to define what happens when promise is fullfilled and other is .catch() which handles if promise is not fulllfiled 

--in then method it gives us response and to get it in json format  we use .json() method on it 

-- The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON

-- Sometimes it might happen that the fields of the resposne and the ones you have used for dsiplaying data are diffrent in such case you nned to transform the respone before outputting it 
```
 Eg : App is written is such a way it requires episode desc, relaese date and some other data for it but response has some other name given to same things which give us that info so we transofrm the data 
  
   fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        const transformedMovies=data.results.map((movieData)=>{
           return{
            id:movieData.episode_id,
            title:movieData.title,
            openingText:movieData.opening_crawl,
            releaseDate:movieData.release_date
           }
        })
        setMovies(transformedMovies)});
        
```

The keyword async before a function makes the function return a promise:

The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

let value = await promise

``` eg:

 fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        const transformedMovies=data.results.map((movieData)=>{
           return{
            id:movieData.episode_id,
            title:movieData.title,
            openingText:movieData.opening_crawl,
            releaseDate:movieData.release_date
           }
        })
        setMovies(transformedMovies)});
        
        TO
        
        async function fetchMovieHandler() {
    let response = await fetch("https://swapi.dev/api/films/");
    let data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
  }
```
To set some text to let user know that movies are loading 

```
function App() {
  const [movies, setMovies] = useState([]);
  const[isLoading,setisLoading]=useState(false);

  async function fetchMovieHandler() {
    setisLoading(true);
    let response = await fetch("https://swapi.dev/api/films/");
    let data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setisLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && movies.length>0 && <MoviesList movies={movies} /> }
       {!isLoading && movies.length==0 && <p>No movies Found</p>}
       {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

```
When we are using .then() styleo fhandlign async code then we use .catch() to handle error 

when we are using async await then we put all code in try and in catch(error){} block handle errors
