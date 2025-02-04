import PropTypes from "prop-types";
import UserDetails from "./UserDetails";

const UserList = ({ users }) => {
  return (
    <ul className="flex flex-col gap-3 mt-16">
      {users.map((user) => (
        <li key={user.id}>
          <UserDetails user={user} />
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
