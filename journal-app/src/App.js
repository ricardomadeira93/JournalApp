import NavBar from "./Components/NavBar";
import TravelCard from "./Components/TravelCard";
import data from "./data";

function App() {
  const cards = data.map((info) => {
    return (
      <TravelCard
        key={info.key}
        img={info.imgURL}
        title={info.title}
        startDate={info.startDate}
        endDate={info.endDate}
        location={info.location}
        googleMapsUrl={info.googleMapsUrl}
        description={info.description}
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
