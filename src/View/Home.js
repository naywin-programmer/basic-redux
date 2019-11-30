import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../Actions/actions'

function Home(props) {
    const [text, setText] = React.useState('');
    const [todos, setTodos] = React.useState(props.todos || []);
    // const textRef = React.useRef();

    let onClick = () => {
        setTodos(prevState => {
            return [
                ...prevState,
                {
                    text: text,
                }
            ]
        })
        props.addTodo(text)
    }

    let renderTodos = () => {
        return todos.map((each, i) => (
            <div key={i}>
                {each.text}
            </div>
        ))
    }

    let onChange = (event) => {
        setText(event.target.value);
        // textRef.curr
    }

    return (
        <div className="App">
            {renderTodos()}
            <hr />
            <input type="text" value={text} onChange={onChange} />
            <button onClick={onClick}>Add</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        'todos': state.todos
    }
}

export default connect(mapStateToProps, {addTodo})(Home);
