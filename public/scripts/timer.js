// , days, hours, minutes, seconds
const timer = async () => {
  let res = await fetch("http://localhost:3000/timer");
  tir = await res.json();
  console.log(tir)
};

export default timer;
