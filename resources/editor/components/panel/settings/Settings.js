import React from "react";
import Tabs from "./Tabs";
import Group from "./Group";

const Settings = (props) => {
  const guid = props.panel.widgetGuid;
  const tab = props.panel.tab;
  const widget = window.ds.widgets.get(guid);
  const [open, setOpen] = React.useState(0);

  const changeOpen = (index) => {
    setOpen(index);
  };

  return (
    <div>
      <Tabs tab={tab} />
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
