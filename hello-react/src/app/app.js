import Clock from "./clock";
import Counter from "./counter";
import Hello from "./hello";

function App() {
  
  return (
    <div className="App">
      <Hello name="Romain" />
      <Hello name="Toto" />
      <Hello />
      <Clock />
      <Counter />
    </div>
  );
}

export default App;
