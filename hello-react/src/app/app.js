import Clock from "./clock";
import Hello from "./hello";

function App() {
  
  return (
    <div className="App">
      <Hello name="Romain" />
      <Hello name="Toto" />
      <Hello />
      <Clock />
    </div>
  );
}

export default App;
