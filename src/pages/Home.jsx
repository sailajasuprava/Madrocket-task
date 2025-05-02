import PokemonList from "../components/PokemonList";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <main className="flex flex-col sm:flex-row">
      <SideBar />
      <PokemonList />
    </main>
  );
}

export default Home;
