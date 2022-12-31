import { useSelector } from "react-redux";

const useIsGuest = () => {
  const isGuest = useSelector((s) => s.user.isGuest)

  return isGuest
}

export default useIsGuest
