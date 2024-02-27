function ClockTime() {
  let DateTime = new Date();
  let date = DateTime.toLocaleDateString();
  let time = DateTime.toLocaleTimeString();
  return (
    <div>
      <p>Today Date is:{date} </p>
      <p>Time now is:{time}</p>
    </div>
  );
}

export default ClockTime;
