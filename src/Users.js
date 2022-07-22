import React, { useEffect, useState } from "react";

function Users() {
  const [account, setAccont] = useState({ name: "Danilo", deposit: 10000 });
  useEffect(() => {
    console.log("rendering");
  }, [account.deposit]);
  return (
    <div className="container text-center ">
      <h1>
        {account.name} ---- {account.deposit}
      </h1>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setAccont({ ...account, name: event.target.value });
        }}
      />
      <input
        type="text"
        placeholder="deposit"
        onChange={(event) => {
          setAccont({ ...account, deposit: event.target.value });
        }}
      />
    </div>
  );
}

export default Users;
