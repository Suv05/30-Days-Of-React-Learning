function Reuse() {
  let rand = () => {
    return Math.floor(Math.random() * 10);
  };

  return <p>rendom number generated {rand()}</p>;
}

export default Reuse;
