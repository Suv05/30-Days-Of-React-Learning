import "./App.css";
import CreatePost from "./components/Createpost";
import Postlist from "./components/Postlist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PostlistProvider from "./contexts/PostlistsProvide";

function App() {
  const [selectTab, setSelectTab] = useState("Create Post");

  return (
    <PostlistProvider>
      <div className="appContainer">
        <Header></Header>
        <div className="cardContent">
          <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}></Sidebar>
          {selectTab === "Home" ? <Postlist /> : <CreatePost />}
        </div>
        <Footer />
      </div>
    </PostlistProvider>
  );
}

export default App;
