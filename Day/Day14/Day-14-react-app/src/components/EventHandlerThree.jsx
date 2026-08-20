function ActionButtons({onGreet, onShowInfo}){
    return(
        <div>
            <button onClick={onGreet}>Greet</button>
            <button onClick={onShowInfo}>Show Info</button>
        </div>

    );

}
function ActionButtonDemo(){
    function handleGreet(){
        alert("Info butoon clicked");
    }
    return(
        <div>
            <h2>Action Buttons Demo</h2>
            <ActionButtons onGreet={handleGreet} onShowInfo={handleShowInfo}/>
        </div>
    )
}
export default ActionButtonDemo;