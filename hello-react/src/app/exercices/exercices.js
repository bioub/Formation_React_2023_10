import { useState } from "react";
import Helloworld from "./helloworld";
import MultiStateButton from "./multi-state-button";
import Select from "./select";
import Todos from "./todos";

function Exercices() {
  const names = ['Toto', 'Titi', 'Tata'];
  const [name, setName] = useState('Toto');

  function handleSelected(val) {
    setName(val);
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