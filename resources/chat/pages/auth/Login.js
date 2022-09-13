import React from "react";
import Input from "./Input";
import Button from "./Button"
import axios from "axios";
import "../../scss/pages/auth.scss"
import useGuestRedirect from "../../hooks/useGuestRedirect";

const classNames = {
  container: "h-screen w-screen flex justify-center items-center",
  form: "flex-col flex justify-center items-center"
}

const Login = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  })

  useGuestRedirect(false, "/")

  const onChange = (field, e) => {
    setForm((s) => ({
      ...s,
      [field]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const r = await axios.post("/ajax/login", form)
  }

  return <div className={classNames.container}>
    <form onSubmit={onSubmit} className={classNames.form}>
      <Input
        name="email"
        autoComplete="email"
        value={form.email}
        onChange={(e) => onChange("email", e)}
        placeholder="Email"
      />
      <Input
        type="password"
        name="password"
        autoComplete="new-password"
        value={form.password}
        onChange={(e) => onChange("password", e)}
        placeholder="Password"/>
      <Button>
        Sign in
      </Button>
    </form>
  </div>
}

export default Login
