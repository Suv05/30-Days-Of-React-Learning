import ClockHead from "./Components/ClockHead";
import ClockText from "./Components/ClockText";
import ClockTime from "./Components/ClockTime";

let BharatClock = () => {
  return (
    <div className="text-center">
      <ClockHead />
      <ClockText />
      <ClockTime />
    </div>
  );
};
export default BharatClock;
