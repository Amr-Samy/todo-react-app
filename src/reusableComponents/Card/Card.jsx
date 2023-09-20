import Button from "../Button/Button";
import "./Card.css";

const Card = (props) => {
  return (
    
      <div className={`card shadow rounded-0 mx-4 mb-2 align-items-center ${props.color}`} style={{
          width: "20rem", height: "5rem",
      }}>
  
  <div className="card-body d-flex align-items-center " >
        <div className={`card-title flex-fill text-dark me-5 ${props.isDone}`}>{props.title}</div>
        <Button content= {props.buText} handleClick={props.handleDone}></Button>
        <Button content="Delete" handleClick={props.handleDelete}></Button>
  </div>
  
</div>
    
  );
};

export default Card;
