import { useEffect, useState } from "react";
import Homeitem from "../components/Homeitem";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

function Home({}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/items");
        const data = await response.json();
        setItems(data.items);
        setLoading(false);
      } catch (error) {
        console.log("Error detected" + error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <Homeitem key={item.id} items={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
