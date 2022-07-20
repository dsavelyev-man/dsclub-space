import React from "react";
import Tabs from "./Tabs";
import Group from "./Group";

const Settings = (props) => {
  const guid = props.panel.widgetGuid;
  const tab = props.panel.tab;
  const widget = window.ds.widgets.get(guid);
  return (
    <div>
      <Tabs />
      <div>
        {(widget.settings[tab].toArray() || []).map((group) => {
          return <Group key={group._name} group={group} />;
        })}
      </div>
    </div>
  );
};

export default Settings;
