import React from "react";
import Tabs from "./Tabs";
import Group from "./Group";
import { useDispatch } from "react-redux";
import { setTab } from "../../../store/reducers/panel/panelReducer";

const Settings = (props) => {
  const guid = props.panel.widgetGuid;
  const tab = props.panel.tab;
  const widget = window.ds.widgets.get(guid);
  const [open, setOpen] = React.useState(0);
  const dispatch = useDispatch();

  const changeOpen = (index) => {
    setOpen(index);
  };

  const changeTab = (tab) => {
    dispatch(setTab(tab));
    setOpen(0);
  };

  return (
    <div>
      <Tabs tab={tab} changeTab={changeTab} />
      <div>
        {(widget.settings[tab].toArray() || []).map((group, index) => {
          return (
            <Group
              guid={guid}
              key={group._name}
              changeOpen={changeOpen}
              index={index}
              open={open}
              group={group}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
