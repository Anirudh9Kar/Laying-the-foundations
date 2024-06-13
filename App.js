import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => Upon rendering it will be a HTML Element

const heading=React.createElement(
    "h1" ,{id: "heading"}, 
    "Namaste React"
);



// JSX. JSX's syntax looks like HTML but it is different. 
const jsxHeading=<h1 id="heading">Namaste JS from JSX-Element</h1>



// React Functional Component

const HeadingComponent= () =>{
    return <h1>Namaste React from Fun 1</h1>;
}

const number=100;
//Component Composition
const HeadingComponent2=()=> (
    <div className="Container">
        {jsxHeading}
    <HeadingComponent></HeadingComponent>
    <HeadingComponent/>
    {HeadingComponent()}
    <h1>Namaste React from Function Component</h1> 
    </div>
   
);


// const Title= () =>(
// <h1>React Element</h1>
// );

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>); 
// root.render(<Title/>);
