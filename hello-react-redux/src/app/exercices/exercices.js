import { useState } from "react";
import Helloworld from "./helloworld";
import MultiStateButton from "./multi-state-button";
import Select from "./select";
import Todos from "./todos";
import { useDispatch, useSelector } from "react-redux";
import { nameSelector } from "../store/selectors";
import { updateName } from "../store/actions";

function Exercices() {
  const names = ['Toto', 'Titi', 'Tata'];
  // const [name, setName] = useState('Toto');
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();

  function handleSelected(val) {
    dispatch(updateName(val));
  }

  return (
    <div className="Exercices">
      <Helloworld />
      <MultiStateButton items={names} value={name} onValueChange={handleSelected} />
      <Select items={names} value={name} onValueChange={handleSelected} />
      <Todos />
    </div>
  );
}

export default Exercices;