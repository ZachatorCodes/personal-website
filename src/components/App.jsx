import Navbar from "./Navbar";
import Home from "../pages/Home";

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

function App() {
  return (
    <div className="bg-base-200 h-auto sm:h-screen m-0 p-0">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
