const parent=React.createElement("div" , {id:"parent"} ,
    [React.createElement("div",{id:"child 1"},[React.createElement("h1", {} , "namste react hello world page 1"),
        React.createElement("h2",{}, "namaste hello world page 2")
    ]),
    React.createElement("div",{id:"child 2"},
        React.createElement("div2",{id:"child2"},
            [React.createElement("h1",{}, "Namaste react wel come page 3"),
                React.createElement("h2",{}, "Namaste react wel come paghe 4")
            ]
        )
     )]

);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);