import React from "react";
import axios from "axios";
import { updateUser } from "../store/reducers/user/userReducer"
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const auth = async () => {
      const r = await axios.get("/ajax/auth")

      if(r.status === 200) {
        dispatch(updateUser(r.data))
      } else {
        dispatch(updateUser({
          isGuest: true,
          user: null
        }))
      }
    }

    auth()
  })
}

export default useAuth
