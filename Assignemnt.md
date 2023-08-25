Hooks:

Folder Structure:
1- All the components come under the component folder and should have a capitalized name.
2- All the hard coded variables in utils folder, all constants should be defined in snake case and capital letters.
3- In utils folder mockData the dummy data is defined.

Exports Imports:
There are two types of exports 1- Default 2- Named Default
Default export is imported without {} and named export is imported with {}
Export default Component
Import Component from “path”

Export const name=””;
Import {Name} from “path”

Virtual DOM and Diffing Algo
React is fast because of Virtual DOM so the question arises what is virtual DOM it is a representation of an actual DOM. An actual DOM is an html document having all div p and h1 tags all tags and virtual Dom is an object form of representation of it.So whenever there is a re render happens the diffing algo finds out the diff between the updated virtual DOM and previous DOM and then after pointing out the changes updates the DOM so it isn't a computational expensive operation. So behind the scenes diffing algo is used which is fastening the speed of React.

Assignment:

1-Diff Exports
1- Named Export:
Export const name=”Sehnoor”
Export const color=”yellow”
Import {name,color} from “path” || import * as Components from “path” ; console.log(Components.name)
This kind of export is known as named export.

2- Default Export
Export default Component;
Import Component from “path”;

2- Config.js
Config js is used for configuration of API URL and API KEY which is used allover in the code.
3-React Hooks:
React hooks are the reason upon changing of states the UI is re rendered which updates the actual DOM. React Hooks triggers the state. 
React Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. Before the introduction of hooks, these features were primarily available in class components. Hooks provide a more concise and intuitive way to manage state, perform side effects, and interact with React's lifecycle in functional components.

4- UseState Hooks
 Use State hook is used for state management; usestate returns  a current state variable and a function which when gets updated triggers the rerender of UI. Initially it is initialized to any value and upon change function to set state is called which auto magically reflect the same value to state variable .
