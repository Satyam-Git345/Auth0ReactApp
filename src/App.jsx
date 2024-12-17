import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(user);
  return (
    <>
      <h3>App Component</h3>
      {isAuthenticated ? (
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          logout
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={(e) => loginWithRedirect()}
        >
          Login With redirect
        </button>
      )}
      {isAuthenticated ? (
        <div className="profile-container">
          <h1>User Profile</h1>
          <div className="profile-details">
            <img
              src={user.picture}
              alt="User Profile"
              className="profile-picture"
            />
            <div className="details">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Given Name:</strong> {user.given_name}
              </p>
              <p>
                <strong>Family Name:</strong> {user.family_name}
              </p>
              <p>
                <strong>Nickname:</strong> {user.nickname}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Email Verified:</strong>{" "}
                {user.email_verified ? "Yes" : "No"}
              </p>
              <p>
                <strong>Sub:</strong> {user.sub}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(user.updated_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
