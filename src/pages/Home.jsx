import PokemonList from "../components/PokemonList";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <main className="flex">
      <SideBar />
      <PokemonList />
    </main>
  );
}

export default Home;
