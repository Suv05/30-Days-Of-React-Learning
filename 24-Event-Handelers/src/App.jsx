import Box from "./components/Box";

function App() {
  function playAnimation(e) {
    console.log(e);
    const animte = document.querySelector("#para");
    animte.classList.toggle("animate__fadeInLeft");
  }
  return (
    <>
      <Box whenClick={playAnimation}></Box>
    </>
  );
}

export default App;
