import React from "react";
import { useSelector } from "react-redux";
import { usePopper } from 'react-popper';
import MenuItem from "./MenuItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const classNames = {
  button: "h-14 w-14 bg-indigo-100 mr-4 mt-2 rounded-full bg-center bg-cover border",
  menu: "p-1 rounded-xl bg-slate-700 drop-shadow-xl head-menu z-10"
}

const Menu = () => {
  const avatarPath = useSelector((s) => s.user.data.avatar_path)
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'offset', options: { offset: [-28, 6] } }],
  });

  const onClick = () => {
    setShow((s) => !s)
  }

  return  <>
    <button onClick={onClick} ref={setReferenceElement} className={classNames.button} style={{
      backgroundImage: `url(/assets${avatarPath})`
    }}/>
    {
      show && <div className={classNames.menu} ref={setPopperElement} style={styles.popper} {...attributes.popper} >
        <MenuItem label="Profile" icon={AccountCircleIcon} to="/profile"/>
        <MenuItem label="Settings" icon={AccountCircleIcon} to="/settings"/>
        <MenuItem label="Friends" icon={AccountCircleIcon} to="/friends"/>
        <MenuItem label="Exit" icon={AccountCircleIcon} to="/exit"/>
      </div>
    }
  </>
}

export default Menu
