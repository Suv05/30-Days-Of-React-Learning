//here we are going to see dynamic compoent
function Hello(){
    let name="suv";
    let game=()=>{
        return 'Ankita';
    }

    return <p>
        me {name} loves {game()}
    </p>


}

export default Hello;