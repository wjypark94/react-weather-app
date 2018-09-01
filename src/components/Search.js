import React, {Component} from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }

    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=los angeles&mode=json&APPID=b034d607850d9e3b5543e5449c3e7364")
        .then(res => res.json())
        .then(items => this.setState({ items: items.list}))
    }
    render(){
        const { items } = this.state;
        return(
            <div>
                <h2>Check the weather here!</h2>
                <form> 
                    <input type="text" placeholder="Enter a city.."></input>
                    <button type="submit">Search</button>
                </form>
                <ul>
                    {items.map(item => (
                    <li key={item.dt}>
                    {((item.main.temp-273)*1.8)+32}
                    </li>
                    ))}
                    </ul>
            </div>
        )
    }
}

export default Search;