import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';
const Counter = () => {
  const count = useSelector((state)=>{
    return state.counter
  })
  
  const dispatch = useDispatch();

  const handleInc = ()=>{
    dispatch(counterActions.change(1))
  }
  const handleDec = ()=>{
    dispatch(counterActions.change(-1))
  }
  const handleIncByFive = ()=>{
    dispatch(counterActions.change(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
console.log(count)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {count.showCounter ===  true?<div className={classes.value} >{count.counter}</div>:null}
      
      <div>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleIncByFive}>inc by 5</button>
      <button onClick={handleDec}>dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
