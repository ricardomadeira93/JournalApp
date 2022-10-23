import NavBar from "./Components/NavBar";
import TravelCard from "./Components/TravelCard";
import data from "./data";

function App() {
  const cards = data.map((info) => {
    return (
      <TravelCard
        key={info.key}
        {...info}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <section>{cards}</section>
    </div>
  );
}

export default App;
