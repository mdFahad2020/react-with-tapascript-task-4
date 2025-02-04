import PropTypes from "prop-types";
import AddUsers from "./AddUsers";

const Header = ({ users, addUser }) => {
  return (
    <div className="flex justify-between px-5 py-2 bg-gray-100  fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <h2 className="text-lg font-bold">Total Users ({users.length})</h2>
      <AddUsers addUser={addUser} />
    </div>
  );
};

Header.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default Header;
