import stylesForButton from './Button.module.css';

const Button = (props) =>{
return(
    <button
    id= {props.id} 
    type= {props.type || 'button'} 
    onClick = {props.onClick} 
    className= {`${stylesForButton.button} ${props.className}`} 
    disbaled = {props.disabled}
    >
        <b>{props.children}</b>
    </button>
)
};

export default Button;