import "./App.css";
import CreatePost from "./components/Createpost";
import Postlist from "./components/Postlist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="appContainer">
      <Header></Header>
      <Sidebar></Sidebar>
      <CreatePost />
      <Postlist />
      <Footer />
    </div>
  );
}

export default App;
