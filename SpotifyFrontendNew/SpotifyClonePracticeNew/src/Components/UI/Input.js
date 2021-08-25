import stylesForInput from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${stylesForInput.control} ${
        props.isValid === false ? stylesForInput.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default Input;
