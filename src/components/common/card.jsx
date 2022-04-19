import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card h-100">
      <img
        src={props.pic}
        className="card-img-top"
        alt="Not able to display photo."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={`/${props.path}`} className="btn btn-warning" hide="true">
          {props.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
