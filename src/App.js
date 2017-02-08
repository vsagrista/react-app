import React from "react";

// State component

class App extends React.Component {
    render () {
        return <div>
                 <h1>This is a Component</h1>
                 <p>Some text below it</p>
                 <p>This is a text property {this.props.textProp} </p>
                 <p>This is a number property {this.props.numberProp} and required </p>
               </div>  
    }
}

// const App2 = ()=> <h1>This is a stateless component</h1>

App.propTypes = {
    textProp: React.PropTypes.string,
    numberProp: React.PropTypes.number.isRequired
}

App.dafaultProps = {
    textProp: "default text"
}

export default App;


