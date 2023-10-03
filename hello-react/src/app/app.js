import Clock from "./clock";
import Counter from "./counter";
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
    </div>
  );
}

export default App;
