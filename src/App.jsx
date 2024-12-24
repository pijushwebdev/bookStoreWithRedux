import "./App.css";
import AddForm from "./components/AddForm";
import BookCard from "./components/BookCard";
import Filter from "./components/Filter";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container mx-auto">
      <Nav />

      <Filter/>

      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <BookCard />

        <AddForm />
      </div>
    </div>
  );
}

export default App;
