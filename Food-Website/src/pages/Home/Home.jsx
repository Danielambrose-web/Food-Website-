import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [catergory, setCatergory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu catergory={catergory} setCatergory={setCatergory} />
      <FoodDisplay category={catergory}/>
    </div>
  );
};

export default Home;
