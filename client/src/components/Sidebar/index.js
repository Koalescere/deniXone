import React from "react";
import { ListGroup } from "reactstrap";

function Sidebar() {
  //   tileset18 = () => {
  //     // Get call to mapbox api for the 2018 tileset
  //   };

  return (
    <div>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action onClick={"hello"}>
          2018{" "}
        </ListGroup.Item>
      </ListGroup>
      ,
    </div>
  );
}

export default Sidebar;
