const TeamCard = (props) => {
  return (
    <div className="card h-75">
      <img
        src={props.pic}
        className="card-img-cust"
        alt="Not able to display photo."
      />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
