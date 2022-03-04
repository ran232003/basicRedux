import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';
import classes from './Header.module.css';


const Header = () => {
  const authState = useSelector((state)=>{
    return state.auth;
  })
 const dispatch = useDispatch();
  const handleLogout = (event)=>{
    event.preventDefault();
    dispatch(authActions.logout())
  }

  console.log(authState)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        
          {authState.auth === false?null:
          <ul>
          <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
          }
          
      </nav>
    </header>
  );
};

export default Header;
