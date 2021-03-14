import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/action';

const Header = () => {

  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.value);

  return (
    <div>
      카운트: {count}
    </div>
  )
};

export default Header;