function ButtonWithAction({label,onclick}){
return(
    <button className="action-btn" onclick={onclick}>{label}</button>
);
}
function ButtonDemo(){
    functionhandleGreet(){
        alert("hello from parent!");
    
    }
    function handleShowInfo(){
        alert("Info button clicked");

    }
    return(
        <>
        <h2>Buttons with props</h2>
        < ButtonWithAction label="Greet"onclick={handleGreet}/>
        < ButtonWithAction label="Show Info"onclick={handleShowInfo}/>
        </>
    );
}
export default ButtonDemo;