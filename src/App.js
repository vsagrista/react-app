import React from "react";

// State component

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: "Type on the input to see me change"
        }
    }
    update(e) {
        this.setState({ txt: e.target.value });
    }
    render() {
        return (<div>
            <h2>This button is a stateless component, inside it has a class component</h2>
            <Button>I <HeartComponent/> React</Button>
            <h2>What we write here changes the state property "text"</h2>
            <Widget update={this.update.bind(this)} />
            <p>It changes here: <strong>{this.state.txt}</strong></p>
        </div>)
    }

}

App.propTypes = {
    textProp: React.PropTypes.string,
    numberProp: React.PropTypes.number.isRequired
}

App.dafaultProps = {
    textProp: "default text"
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

const Button = (props) =>
    <button>{props.children}</button>

class HeartComponent extends React.Component {
    render() {
        return (
            <span>&hearts;</span>
        )
    }
}

export default App;


