import ChildComponent from "./child";
function ParentComponent(){
    return <div>
        <p>Below are the student information</p>
        <ChildComponent name="john" age={25}></ChildComponent>
    </div>
}

export default ParentComponent;