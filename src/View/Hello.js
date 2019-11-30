import React from 'react'
import {connect} from 'react-redux'

function Hello({todos}) {
    return (
        <div>
            {
                todos.map((each) => (
                    <div>
                        {each.text}
                    </div>
                ))
            }
            <p>Hello Page</p>
        </div>
    )
}

let mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps)(Hello);