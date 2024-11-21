export default function TabButton({children, onSelect, isSelected}){
        
    return(
        <li><button onClick={onSelect}  className={isSelected ? active : undefined}>{children}</button></li>
    )
}

//basic with no argument
//<button onClick={handleSelect}>click</button>
//function handleSelect(){...};
//onClick need to pass in a pointer to function , only name of function without execute ()

//to pass in argument with handleSelect ,wrap into an arrow function to prevent it execute immediately
//<TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
//in App.jsx pass onSelect to component's onClick, function handleSelect in function App

//if no argument is needed to pass
//onSelect={handleSelect}


// export default function TabButton(props){
        
//     return(
//         <li><button onClick={onSelect}>{props.children}</button></li>
//     )
// }


//<TabButton label='Components'/>

// function TabButton({label}){
//     return(
//         <li><button>{label}</button></li>
//     )
// }
