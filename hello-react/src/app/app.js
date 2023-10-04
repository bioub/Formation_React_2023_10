import Clock from "./clock";
import Counter from "./counter";
import Exercices from "./exercices/exercices";
import Hello from "./hello";
import UserForm from "./user-form";

function App() {

  const propsHello = {
    name: 'Toto',
    age: 20,
  };
  
  return (
    <div className="App">
      <Hello name="Romain" age={123} isActive />
      <Hello name="Toto" />
      <Hello {...propsHello} />
      <Hello />
      <Clock />
      <Counter />
      <UserForm />
      <Exercices />
    </div>
  );
}

export default App;
