
function Button({ label, handleClick }) {
    return(
        <button onClick={() => handleClick(label)} className="buttons-button">{label}</button>
    ); 
}

export default Button;