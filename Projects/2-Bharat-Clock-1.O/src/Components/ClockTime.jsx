import { useEffect } from "react";
import { useState } from "react";

function ClockTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("interval started");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //clean up
    return () => {
      clearInterval(intervalId);
      console.log("Cancel the interval");
    };
  }, []);
  let date = time.toLocaleDateString();
  let times = time.toLocaleTimeString();
  return (
    <div>
      <p>Today Date is {date} </p>
      <p>Time now is {times}</p>
    </div>
  );
}

export default ClockTime;
