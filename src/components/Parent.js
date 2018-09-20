import React, { Component } from 'react';

import Child from './Child';
export default class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookTitle:"Lives of Men"
        }
    }

    changeTitle = (title)=>{
        console.log("Parent Method gets invoked !!!")
        this.setState({bookTitle:title})
    }

    render(){
        return(
            <div>
                <Child change_Book={this.changeTitle}  title={this.state.bookTitle}/> 
            </div>
        )
    }
}