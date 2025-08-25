import CarForm from "./components/CarForm.js";
import CarList from "./components/CarList.js";
import CarSearch from "./components/CarSearch.js";
import CarValue from "./components/CarValue.js";

function App() {
  return <div className="container is-fluid">
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue/>
  </div>
}

export default App;
