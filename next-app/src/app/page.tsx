import KeyboardSelectableList from "../components/KeyboardSelectableList";

const items = ["Apple", "Bear", "Carrot", "Dog", "Eggplant", "Frog"];

function App() {
  return (
    <div>
      <h1>Select Items with Keyboard</h1>
      <KeyboardSelectableList items={items} />
    </div>
  );
}

export default App;
