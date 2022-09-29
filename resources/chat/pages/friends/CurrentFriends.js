import React from "react";
import axios from "axios";
import Friend from "./Friend";
import Search from "./Search";
import { Scrollbar } from 'react-scrollbars-custom';

const classNames = {
  container: "p-4"
}

const url = "/ajax/friends"

const CurrentFriends = () => {
  const [friends, setFriends] = React.useState([])

  const getFriends = async (search) => {
    const r = await axios.get(url, {
      params: {
        search
      }
    })

    if(r.status === 200) {
      setFriends(r.data)
    }
  }

  React.useEffect(() => {


    getFriends()
  }, [])

  const onUpdate = async (searchText) => {
    await getFriends(searchText)
  }

  return <>
    <Search onUpdate={onUpdate}/>
    <div className={classNames.container}>
      <Scrollbar style={{ height: "calc(100vh - 168px)", width: "calc(100% + 10px)", transform: "translateX(0px)" }}>
        {
          friends.map((friend) => (
            <Friend friend={friend} key={friend.id}/>
          ))
        }
      </Scrollbar>
    </div>
  </>
}

export default CurrentFriends
