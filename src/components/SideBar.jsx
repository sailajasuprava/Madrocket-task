import Filter from "./Filter";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";

function SideBar() {
  return (
    <aside className="p-4 flex flex-col gap-10 items-center">
      <SearchBar />

      <Filter />

      <SortBy />
    </aside>
  );
}

export default SideBar;
