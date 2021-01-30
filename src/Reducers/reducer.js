/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import InitialData from '../InitialData.js'

const userReducer = (currData = InitialData,action) =>{
     switch(action.type) {
         case 'USER' : {
             currData = {
                 ...currData,
                 userInformation :action.payload
             }
             break;
         }
         case 'POST': {
             currData = {
                 ...currData,
                 postInformation:action.payload
             }
         }
     }

     return currData
}

export default userReducer