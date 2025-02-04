import { Fragment, useState } from "react";
import Header from "./Header";
import UserList from "./UserList";

const initialUsers = [
  { id: 1, name: "MD. SHANTO SARKER", age: 28, occupation: "Engineer" },
  { id: 2, name: "SURAIYA SINHA", age: 34, occupation: "Designer" },
  { id: 3, name: "MD. SHOHANUR RAHMAN RAFI", age: 40, occupation: "Developer" },
  { id: 4, name: "MST. KAJOL KHATUN", age: 25, occupation: "Artist" },
  { id: 5, name: "MARIA ISLAM NUPUR ", age: 30, occupation: "Teacher" },
];

const randomNames = [
  "NONDINY KARMOKAR KOLY",
  "ABDULLAH NUR",
  "SHAHRIYAR SHOWKHIN",
  "ISHTIAQUE AHMED",
  "MARUFA AKTER NIJHUM",
];
const randomOccupations = ["Writer", "Doctor", "Chef", "Pilot", "Musician"];

const AllUser = () => {
  const [users, setUsers] = useState(initialUsers);
  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      age: Math.floor(Math.random() * 40) + 20,
      occupation:
        randomOccupations[Math.floor(Math.random() * randomOccupations.length)],
    };
    setUsers([...users, newUser]);
  };

  return (
    <Fragment>
      <Header users={users} addUser={addUser} />
      <UserList users={users} />
    </Fragment>
  );
};

export default AllUser;
