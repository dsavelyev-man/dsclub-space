import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../store/reducers/widgets/widgetsReducer";

const TextController = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    props.controller.setValue(e.target.value);

    dispatch(update(props.guid));
  };

  return <input onChange={handleChange} />;
};

export default TextController;
