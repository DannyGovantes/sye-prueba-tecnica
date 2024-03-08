import React from "react";
import { useForm } from "../hooks";

export function Login() {
  const { role, name, onChanged, resetState } = useForm({ role: "", name: "" });
  const onLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
    resetState();
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Role"
          value={role}
          onChange={onChanged}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={onChanged}
        />
        <button onClick={onLogin}>Login</button>
      </form>
    </div>
  );
}
