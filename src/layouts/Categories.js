import React from "react";
import { Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu fluid vertical>
        <Menu.Item name="run" />
        <Menu.Item name="walk" />
        <Menu.Item name="bike" />
      </Menu>
    </div>
  );
}
