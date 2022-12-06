![Screenshot (10)](https://user-images.githubusercontent.com/98139553/204858372-f7806202-0afc-4a02-9a03-54cb71a3dbd2.png)
![Screenshot (11)](https://user-images.githubusercontent.com/98139553/204860548-2de19d09-c387-424b-a55a-12fba7f2f12f.png)
![Screenshot (12)](https://user-images.githubusercontent.com/98139553/204861629-92fb98f7-059d-46a5-a085-48f12abebdee.png)
![Screenshot (13)](https://user-images.githubusercontent.com/98139553/204863146-d2d6664d-21a2-441b-a614-5d3247b9c491.png)
![Screenshot (14)](https://user-images.githubusercontent.com/98139553/205218726-46e015f7-cdcd-4304-b44c-9d65ab3f4860.png)
![Screenshot (17)](https://user-images.githubusercontent.com/98139553/205505881-d7e32666-c991-4344-a9d2-a18ccfe2acb0.png)
![Screenshot (19)](https://user-images.githubusercontent.com/98139553/205506144-99a28e4c-e84b-4327-8b9d-002b8328c4f2.png)
 use props.children to create Wrapper Components   Wrapper help reduce code duplication
 
 
 --- onClick={() => {console.log("Clicked")}}
 
--- onChange is used to handle changes on input or somme other is is similar to onInput

--- event is the action that we should change to OnChangeHandler function and that helps us in knowing what event happend and get the values out of it 
--- event.target.value has the value of the event 

![Screenshot (24)](https://user-images.githubusercontent.com/98139553/205678471-3c0a4264-471f-48cf-9449-897149a902a5.png)
--- Insted of having 3 individual we can one clubbed state 

---And while updating we use spread operator to extract all previously stored values and overeride the chnaged values and then store them 
--- Also while updating state which depends on prev state do like thiis 
    setUserInput( (prevState) => { return {...prevState,eneteredTitle:event.target.value } } );
    prevState is passed by react internally we do not need to pass it
    This is done to make sure we are poitnign towards correct prev state
    

![Screenshot (25)](https://user-images.githubusercontent.com/98139553/205679200-baf13dbe-5de0-4537-b9c1-e1b0db56b4a5.png)
--- We use value of input because when we reload the prev values remain in the input they do not change so to get latest one we use value={enteredTitle} so that the value id also changed depending on current value stored in useState

    
![Screenshot (27)](https://user-images.githubusercontent.com/98139553/205702010-ee575a9c-3082-4282-acbb-3c76305d361e.png)
![Screenshot (28)](https://user-images.githubusercontent.com/98139553/205702025-4aec2b95-f18e-46ca-90a0-b7faee81a5ed.png)
--- For child to parent communication what we do is 
    In Parent we create a custom handler for the child component add a function pointer over there ( as we do in onClick etc ) then in the actual dfunction defination     we declare a paramter that the function should have when the function is called and that parameter is data from child
    In Child we requitre props and we do props.customHandler ( declared in parent ) and now we call the function pointed by it and pass in the data that we want to         pass and thus the data in child is sent to parent  we add () to handler name not the function name of parent  
    
    
    
 --- Lifting State up is to pass date from child to parent to either use it there or to pass it to some other comp.   
    

![Screenshot (135)](https://user-images.githubusercontent.com/98139553/205708940-e57d7019-3489-47c3-a8a5-33f6e53d72f5.png)
![Screenshot (29)](https://user-images.githubusercontent.com/98139553/205708966-11d826d1-358e-41b7-b3d3-ab0c038e58e1.png)

Here we are lifting state up nut two way data binding is not done to to that we can pass filtered year as value of a prop and on other side we can make value of dropdown as props.( use state 1st argument on other side )



![Screenshot (136)](https://user-images.githubusercontent.com/98139553/205709513-c1e56506-6a87-4f4e-a1c9-73820d36eac7.png)


--- When ever we use two way binnding we are creating a controlled compoennt


---When we add an item to list using [expense,..prevState] then the probelm is in dev tools the item is added at last of list
and then all items are visited and updated to maatch the array we have created and that is slow as all items need to be shifted
That can lead to state issues 

---This can be solved by assignig keys to the items by usign key: prop which is built inn in react 

---This helps react to identify different entities uniquely and visting and updating every item is not required

---Add keys when mapping list of items

---Conditional Contet is rendering different output based on different conditions
Basically if else but most of them are not allowed in {} so use ternary operators

---Conditon ? trueReturn :falseReturn


---For style we have double curly braces because the {} is for dynmaic seeting of style and nested {} is beacuse the react needs the style as an object 
