import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold underline">Hello Tailwind CSS 4</h1>
      <div className="">
        <Button size="lg">Click me</Button>
      </div>
    </div>
  );
}

export default App;
