function OnlineUsers({ users }) {
  return (
    <>
      {users.map((user, i) => (
        <p key={i}>{user.name}</p>
      ))}
    </>
  );
}

export default OnlineUsers;
