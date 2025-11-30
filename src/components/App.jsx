import Navbar from "./Navbar";
import Home from "../pages/Home";

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

function App() {
  return (
    <div className="bg-base-200 sm:h-screen w-full h-full m-0 p-0 overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
