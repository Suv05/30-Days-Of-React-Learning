import Child from "./Child";
function Parent() {
    const handelOnClick=()=>{
        console.log("I am clicked 😂");
    }
  return (
    <div>
       <Child onCli={handelOnClick}></Child> 
    </div>
  )
}
export default Parent;