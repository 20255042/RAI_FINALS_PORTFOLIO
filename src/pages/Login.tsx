import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    if (password === "bawalKaDitoBoi") {

      navigate("/admin");

    } else {

      alert("WHO ARE YOU? THIS PAGE IS FOR ADMIN ONLY!");

    }

  };

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
      }}
    >

      <h1>Admin Access</h1>

      <p>
        KEEP OUT RESTRICTED AREA!
      </p>

      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <br /><br />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
        }}
      >
        Login as Admin
      </button>

    </div>

  );
}

export default Login;