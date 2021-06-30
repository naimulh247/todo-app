import React from "react-dom";

// const Test = () => {
//     return <p>This is a test!</p>
// }

// const App = () =>{
//     return <h1>Hello</h1>;
// }

// const App = () => {
//     return <Test/>
// }

// To return multiple compotents we can use either a wrapper div or JSX Fragment
// const App = () =>{
//     return (
//         <div>
//             <h1>Hello!</h1>
//             <Test/>
//         </div>
//     )
// }
 
// This is a class component
// class App extends React.Component{
//     render() {
//         return <h1>Hello This is a Class</h1>
//     }
// }

// we can also call a class from another class 
class Test extends React.Component {
    render() {
        return <p>This is the test class</p>;
    }
}


class App extends React.Component{
    render() {
        return <Test/>;
    }
}

export default App;