import React, { Component } from 'react';
import { connect } from 'react-redux'

class GameForm extends Component {
    render() {
        return(
            <div> 
                Add a new game to the List
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default GameForm