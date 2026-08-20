function ClickDemo(){
    function handleSeperateClick(){
        alert("Separate handler clicked");

    }
    return(
        <div>
            <h4>Click demo</h4>
            <button onClick={handleSeperateClick}>Separate Handler</button>
            <button onClick={()=> alert("Inline handler clicked")}>Inline Handler</button>
        </div>
    )
}
export default ClickDemo;