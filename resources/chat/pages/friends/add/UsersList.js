import React from "react";
import axios from "axios";
import Search from "../Search";
import { Scrollbar } from 'react-scrollbars-custom';
import User from "./User";
import Friend from "../Friend";

const classNames = {
  container: "px-4 pb-4"
}

const url = "/ajax/friends/add"

const UsersList = () => {
  const [users, setUsers] = React.useState([])
  const [page, setPage] = React.useState(1)

  const getUsers = async (search, isSearch=false) => {
    if(isSearch) setPage(1)
    if(page === -1 && !isSearch) return;

    const r = await axios.get(url, {
      params: {
        search,
        page: isSearch ? 1 : page
      }
    })

    if(r.status === 200) {
      if(isSearch) {
        setUsers(r.data)
      } else {
        setUsers((s) => [...s, ...r.data])
      }
      if(r.data.length < 20) {
        setPage(-1)
      } else {
        setPage((s) => s+1)
      }

      if(window.lastFriendObserver) {
        window.lastFriendObserver.disconnect()
      }
    }
  }

  React.useEffect(() => {
    getUsers()
  }, [])

  const onUpdate = async (searchText) => {
    await getUsers(searchText, true)
  }

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      getUsers()
    }
  }

  return <>
    <Search onUpdate={onUpdate} isAdd={true}/>
    <div className={classNames.container}>
      <Scrollbar style={{ height: "calc(100vh - 168px)", width: "calc(100% + 10px)", transform: "translateX(0px)" }}>
        {
          users.map((user, index) => (
            user.isFriend ?
              <Friend handleObserver={handleObserver} isLast={users.length - 1 === index} friend={user} key={user.id}/>
              :
              <User handleObserver={handleObserver} isLast={users.length - 1 === index} user={user} key={user.id}/>
          ))
        }
      </Scrollbar>
    </div>
  </>
}

export default UsersList
