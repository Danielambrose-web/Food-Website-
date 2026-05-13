import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";

const Home = () => {
  const [catergory, setCatergory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu catergory={catergory} setCatergory={setCatergory} />
    </div>
  );
};

export default Home;
