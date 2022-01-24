import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const passwordChangeHandler = (event) => {
    setErrors((prevState) => {
      return { ...prevState, password: undefined };
    });
    setPassword(event.target.value);
    if (event.target.value.trim().length === 0) {
      setErrors((prevState) => {
        return { ...prevState, password: "Please enter a valid password" };
      });
    }
  };

  const emailChangeHandler = (event) => {
    setErrors((prevState) => {
      return { ...prevState, email: undefined };
    });
    setEmail(event.target.value);
    if (event.target.value.trim().length === 0) {
      setErrors((prevState) => {
        return { ...prevState, email: "Please enter a valid email" };
      });
    }
  };

  const rememberMeHandler = (event) => {
    setRememberMe(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      const signInForm = {
        email,
        password,
        rememberMe,
      };
      console.log(signInForm);
    }
  };

  const isFormValid = () => {
    return Object.keys(errors).every((key) => errors[key] === undefined);
  };

  const forgotPasswordHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <h1>Sign up</h1>
        <div className="input__container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="input__container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="input__container">
          <label htmlFor="rememberMe">Remember Me</label>
          <input
            type="checkbox"
            id="rememberMe"
            value={rememberMe}
            onChange={rememberMeHandler}
          />
        </div>
        <button type="submit">Sign in</button>
        <div className="links__container">
          <a onClick={forgotPasswordHandler}>Forgot your password?</a>
        </div>
      </form>
    </div>
  );
}

export default App;
