import { useSelector } from "react-redux";
import Clock from "./clock";
import Counter from "./counter";
import Exercices from "./exercices/exercices";
import Hello from "./hello";
import UserForm from "./user-form";
import { nameSelector } from "./store/selectors";

function App() {
  const name = useSelector(nameSelector);

  const propsHello = {
    name: 'Toto',
    age: 20,
  };
  
  return (
    <div className="App">
      <Hello name="Romain" age={123} isActive />
      <Hello name={name} />
      <Hello {...propsHello} />
      <Hello />
      <Clock />
      <Counter />
      <Counter />
      <Counter />
      <UserForm />
      <Exercices />
    </div>
  );
}

export default App;
