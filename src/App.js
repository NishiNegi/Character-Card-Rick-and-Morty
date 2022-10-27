import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./styles.css";

function App() {
  const characters = data.map(function (item) {

    return <CharacterCard key= {item.id} name = {item.name} image ={item.image} state = {item.status} species = {item.species} lastLocationUrl = {item.location.url} lastLocationName = {item.location.name} firstLocationUrl = {item.origin.url} firstLocationName = {item.origin.name} />;
  });
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <div className="container">
      {characters}
      </div>
    </div>
  );
}

export default App;
