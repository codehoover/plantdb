import React, { Component } from 'react';
import './style/Database.css'

class Database extends Component {
    render() {
        return (
            <div className="container">
                <h2>Plant Database search</h2>
                <form title='Enter Uid'>
                    <input type="text" placeholder='Enter Id of plant' maxLength="3"/>
                    <button>Query</button>
                </form>
                
            </div>
        );
    }
}

export default Database;