import { useState } from "react";

export default function Login() {
  const [signUp, setSignUp] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/formData",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const singup = async () => {
    console.log("Sign in", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/formData",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <section className="max_padd_container flex-center flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{signUp}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {signUp === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          ) : (
            ""
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button
          onClick={() => {
            signUp === "Login" ? login() : singup();
          }}
          className="btn_dark_rounded my-5 w-full !rounded-md">
          Continue
        </button>
        {signUp === "Sign Up" ? (
          <p className="text-black font-bold text-center">
            Already have an account?{" "}
            <span
              onClick={() => {
                setSignUp("Login");
              }}
              className="text-secondary underline cursor-pointer">
              Login here
            </span>
          </p>
        ) : (
          <p className="text-black font-bold text-center">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setSignUp("Sign Up");
              }}
              className="text-secondary underline cursor-pointer">
              Sign Up here
            </span>
          </p>
        )}
        {signUp === "Sign Up" ? (
          <div className="flexCenter mt-6 gap-3">
            <input type="checkbox" name="" id="" />

            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
