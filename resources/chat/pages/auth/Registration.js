import React from "react";
import Input from "./Input";
import Button from "./Button"
import Avatar from "./Avatar";
import axios from "axios";
import "../../scss/pages/auth.scss"
import useGuestRedirect from "../../hooks/useGuestRedirect";

const classNames = {
  container: "h-screen w-screen flex justify-center items-center",
  form: "flex-col flex justify-center items-center"
}

const Registration = () => {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: null
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

    const formData = new FormData()

    for(const fieldKey in form) {
      formData.append(fieldKey, form[fieldKey])
    }

    const r = await axios.post("/ajax/registration", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }

  return <div className={classNames.container}>
    <form onSubmit={onSubmit} className={classNames.form}>
      <Avatar setForm={setForm} form={form}/>
      <Input
        name="username"
        autoComplete="name"
        value={form.username}
        onChange={(e) => onChange("username", e)}
        placeholder="Username"
      />
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
      <Input
        type="password"
        name="password_confirmation"
        autoComplete="new-password"
        value={form.password_confirmation}
        onChange={(e) => onChange("password_confirmation", e)}
        placeholder="Confirm password"
      />
      <Button>
        Sign up
      </Button>
    </form>
  </div>
}

export default Registration
