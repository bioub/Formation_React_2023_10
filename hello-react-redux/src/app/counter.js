import { useDispatch, useSelector } from "react-redux";
import { countSelector } from './store/selectors';
import { incrementCount } from './store/actions';

function Counter() {
  // TODO: idealement useSelector et useDispatch seraient
  // mieux placés au niveau du composant parent (App)
  // de sort à ce que Counter ne fasse que de l'UI
  // avantages
  // - mieux réutilisable (avec ou sans Redux)
  // - plus facile d'automatiser le tests
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(incrementCount());
  }

  return (
    <button className="Counter" onClick={handleClick}>
      {count}
    </button>
  )
}

export default Counter;