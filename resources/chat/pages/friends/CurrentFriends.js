import React from "react";
import axios from "axios";
import Friend from "./Friend";
import Search from "./Search";
import { Scrollbar } from 'react-scrollbars-custom';

const classNames = {
  container: "px-4 pb-4"
}

const url = "/ajax/friends"

const CurrentFriends = () => {
  const [friends, setFriends] = React.useState([])
  const [page, setPage] = React.useState(1)

  const getFriends = async (search, isSearch=false) => {
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
        setFriends(r.data)
      } else {
        setFriends((s) => [...s, ...r.data])
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
    getFriends()
  }, [])

  const onUpdate = async (searchText) => {
    await getFriends(searchText, true)
  }

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      getFriends()
    }
  }

  return <>
    <Search onUpdate={onUpdate}/>
    <div className={classNames.container}>
      <Scrollbar style={{ height: "calc(100vh - 168px)", width: "calc(100% + 10px)", transform: "translateX(0px)" }}>
        {
          friends.map((friend, index) => (
            <Friend handleObserver={handleObserver} isLast={friends.length - 1 === index} friend={friend} key={friend.id}/>
          ))
        }
      </Scrollbar>
    </div>
  </>
}

export default CurrentFriends
