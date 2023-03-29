import './App.css';

import { useSelector , useDispatch} from "react-redux";
import add from './Store/Action'
import minus from './Store/ActionMinus'

function App() {
  const langeuage = useSelector(state => state.addre)

  const dispatch = useDispatch();
  const handleChangePlus = () => {
    dispatch(add( langeuage))
  }
  const handleChangeMinus = () => {
    dispatch(minus( langeuage))
  }

  return (
    <div className="App">
      <div className='all'>
        <button onClick={handleChangeMinus}>-</button>
        <p>{langeuage}</p>
        <button onClick={handleChangePlus}>+</button>
      </div>
    </div>
  );
}

export default App;
