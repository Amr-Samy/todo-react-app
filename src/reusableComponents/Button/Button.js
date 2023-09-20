import "./Button.css";

const Button = (props) => {
  return (
      <button
      className="btn btn-primary btn-outline-light rounded-0"
      type={props.type}
      onClick={props.handleClick}
      onSubmit={props.handleSubmit}
    >
      {props.content}
    </button>
  );
};

export default Button;
