import React, { Component } from 'react';

export default class Child extends Component{
    changeHandler=(e)=>{
        const title = e.target.value;
        console.log(this.props.title);
        console.log(this.props.change_Book);
        this.props.change_Book(title);
    };

    render(){
        return(
            <div>
                <input onChange={this.changeHandler} placeholder="CLICK ME TO SET A NEW HEADING"/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}