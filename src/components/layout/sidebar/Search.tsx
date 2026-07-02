import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="bg-[#0f1115] flex w-62 h-10 border-1 border-[#606063]  rounded-md m-1">
      <SearchIcon className="h-8 mx-1" />
      <input
        type="text"
        className="h-8 bg-none p-2  focus:border-none outline-none rounded-md w-44"
        placeholder="Szukaj Kategori..."
      />
    </div>
  );
};

export default Search;
