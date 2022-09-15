import React, { useEffect, useState } from "react";

//8.2.2
interface UserProps {
  handleSelectUser: (id: number) => void;
}

type USER = {
  id: number;
  username: string;
};

function UserSelector({ handleSelectUser }: UserProps) {
  const [users, setUsers] = useState<USER[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        //Q8.2.3 - 2/2
        const filterData = data.map((user: USER) => {
          return { id: user.id, username: user.username };
        });
        return filterData;
      })
      .then((filteredData: USER[]) => setUsers(filteredData));
  }, []);

  return (
    <div>
      <label htmlFor="users">Users:</label>
      <select name="users" id="users" onChange={(e) => handleSelectUser(Number(e.target.value))}>
        <option key="default" value={0}>
          Please Select username...
        </option>

        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSelector;
