import React, {Component} from 'react';

class Search extends Component {
    render(){
        return(
            <div>
                <h2>Check the weather here!</h2>
                <form> 
                    <input type="text" placeholder="Enter a city.."></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;