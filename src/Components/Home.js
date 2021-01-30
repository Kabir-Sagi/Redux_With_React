import React, { Component } from 'react';
import Axios from 'axios'
import store from '../Redux/store'
class Home extends Component {
    componentDidMount() {
        Axios.get("http://jsonplaceholder.typicode.com/users").then((res)=>{
            store.dispatch({
                type:'USER',
                payload:res.data
            })
        //    console.log(res.data)
        })
        Axios.get("http://jsonplaceholder.typicode.com/posts").then((res)=>{
            store.dispatch({
                type:'POST',
                payload:res.data
            })
        //    console.log(res.data)
        })
        
    }
    render() {
        return (
            <div className="container mt-5">
                 <h2>Welcome to Redux with React</h2>
            </div>
        );
    }
}

export default Home;