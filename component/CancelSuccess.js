import React from "react";
import { Link } from 'react-router-dom';
function CancelSuccess(){
    return(
        <div className='Success'>
        <p><h1>Your bus has been Cancelled successfully</h1></p>
        <Link to='/FeedbackForm' ><button> Feedback</button></Link>
        </div>
        
    );
}
export default CancelSuccess;  