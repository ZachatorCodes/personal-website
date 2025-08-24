import Navbar from "./Navbar";
import Home from "./Home";

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

function App() {
  return (
    <div className="bg-base-200 h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
