import Button from "../../reusableComponents/Button/Button";
import "./Hero.css";

const Hero = (props) => {
  return (
      <div className="row ">
    <div id="container" className="d-flex  align-self-start ">
      <div className="align-self-center  ms-5" id="divContent">
        <h2 className=" h1 text-white">TO-DO APP!</h2>
        <h6 className="text-white mt-3">Add a new To-Do</h6>
      
       <input type="text" id="todoText" className="form-control mx-5 w-100" />
          <br></br>
          <Button className="" content='Add' type='submit' />
      </div>
      </div>
      </div>
  );
};

export default Hero;