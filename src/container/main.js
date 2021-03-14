import { Box } from '../styles/main';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/action';

const Main = () => {

  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.value);

  return (
    <Box color='#f2f2f2'>
      숫자 {count}
      <br />
      <button onClick={() => { dispatch(actions.increment(count)) }}>더하기 (+)</button>
      <button onClick={() => { dispatch(actions.decrement(count)) }}>빼기 (-)</button>
    </Box>
  );
}

export default Main;
