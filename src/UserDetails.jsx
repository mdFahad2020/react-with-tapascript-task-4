import PropTypes from "prop-types";

const UserDetails = ({ user }) => {
  return (
    <div className="shadow px-4 py-2">
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Occupation: {user.occupation}</p>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.array.isRequired,
};

export default UserDetails;
