function Question3(){
  let hrs = new Date().getHours();
  let message = "";
  if (hrs < 12) {
    message = "Good Morning!";
  } else if (hrs < 18) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }

  return (
    <div>
      <h2>{message}</h2>
      <p>The current hour is: {hrs}</p>
    </div>
  );
}
export default Question3;
