import { Link } from "react-router-dom";

const TeamTable = ({ divisionName, division }) => {
  return (
    <table className="team-table">
      <thead>
        <th>{divisionName}</th>
        <th>{""}</th>
      </thead>
      <tbody>
        {division.map((t) => (
          <tr>
            <td key={t._id}>
              <img src={t.img} className="team-pic-table" alt={t.teamName} />
            </td>
            <td key={t._id} className="team-name">
              <Link to={`/teams/${t._id}`} className="team-name">
                {t.teamName}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamTable;
