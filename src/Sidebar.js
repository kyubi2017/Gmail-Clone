import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import SidebarOption from './SidebarOption'
import {
  Add,
  AccessTime,
  ExpandMore,
  LabelImportant,
  NearMe,
  Note,
  Inbox,
  Star,
  Person,
  Duo,
  Phone,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice"; 

function Sidebar() {
  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Started" number={54} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
