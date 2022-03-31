
const styledButton = {
    backgroundColor: 'brown'
}


function Button(props) {
    return (
        <div>
            <button style={styledButton}>Press Me</button>
            <button style={props.buttonTextColor}>Press Me Too</button>
        </div>
    )
}

export default Button;