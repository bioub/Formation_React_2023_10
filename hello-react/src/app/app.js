import Clock from "./clock";
import Counter from "./counter";
import Exercices from "./exercices/exercices";
import Hello from "./hello";
import UserForm from "./user-form";

function App() {
  
  return (
    <div className="App">
      <Hello name="Romain" />
      <Hello name="Toto" />
      <Hello />
      <Clock />
      <Counter />
      <UserForm />
      <Exercices />
    </div>
  );
}

export default App;
