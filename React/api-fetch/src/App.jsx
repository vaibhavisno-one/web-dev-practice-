import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  async function fetchUser() {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  }

  return (
    <div>
      <h1>GitHub Profile Presenter</h1>

      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={fetchUser}>Fetch Profile</button>

      {user && (
        <div>
          <img src={user.avatar_url} width={120} />
          <h2>{user.name}</h2>
          <p>@{user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default App;
