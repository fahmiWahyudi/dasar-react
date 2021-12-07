import React from "react"
import ListItem from "./ListItem"

class List extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.propsInState}</h1>
                <ListItem />
            </div>
        )
    }
}

export default List;