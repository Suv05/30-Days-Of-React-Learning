import "./App.css";
import CreatePost from "./components/Createpost";
import Postlist from "./components/Postlist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [selectTab, setSelectTab] = useState("Create Post");

  return (
    <div className="appContainer">
      <Header></Header>
      <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}></Sidebar>
      {selectTab === "Home" ? <Postlist /> : <CreatePost />}
      <Footer />
    </div>
  );
}

export default App;
