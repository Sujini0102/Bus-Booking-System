
import {Link} from 'react-router-dom';
import './LoginSuccess.css';
function LoginSuccess(){
    return(
        <div className='Success'>
        <>
        <p><h1>Signed up successfully</h1></p>
        <Link to='/login' > <button>LOGIN</button></Link>
        </>
        </div>
    );
}
export default LoginSuccess;  