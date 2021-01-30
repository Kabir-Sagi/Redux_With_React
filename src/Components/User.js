import React, { Component } from 'react';
import {connect} from 'react-redux'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userData:this.props.storeData
        }
    }
    
    render() {
        return (
            <div class="container mt-3">
                <table class="table table-hover table-striped">
                    <tr>
                        <th>NAME</th>
                        <th>USER NAME</th>
                        <th>EMAIL</th>
                    </tr>
                
                  {
                      this.state.userData.map((data)=>{
                           return <tr>
                               <td>{data.name}</td>
                               <td>{data.username}</td>
                               <td>{data.email}</td>
                           </tr>
                      })
                  }
                  </table>
            </div>
        );
    }
}

export default connect((store)=>{

      return {
              storeData:store.userReducer.userInformation
      }
})(User)