import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto space-y-8">
        <Greeting name="Djacer" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
