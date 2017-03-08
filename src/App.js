import React from "react";

// State component

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            txt: "Type on the input to see me change"
        }
    }
    update (e) {
        this.setState({txt: e.target.value });
    }
    render () {
        return (<div>
                 <h1>This is a Component</h1>
                 <p>Some text below it</p>
                 <p>This is a text property {this.props.textProp} </p>
                 <p>This is a number property {this.props.numberProp} and required </p>
                 <br/>
                 <h2>What we write here changes the state property "text"</h2>
                 <Widget  update={ this.update.bind(this) }/>
                 <p>It changes here: <strong>{ this.state.txt }</strong></p>
        </div>)  
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

const Widget = (props) => 
    <input type="text" onChange={ props.update }/>

export default App;


