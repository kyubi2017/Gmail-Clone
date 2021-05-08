import { Checkbox } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./EmailList.css";
import Section from "./Section ";
import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  EmailSharp,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings,
} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("email")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="emaillist">
      <div className="emaillist__settings">
        <div className="emaillist__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emaillist__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>
      <div className="emailList__List">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="where u can find me"
          subject="my links"
          description="
          -github : https://github.com/kyubi2017 ;
          -linkedin : https://www.linkedin.com/in/oussama-ait-ikhlef-7728b11a8/"
          time="10pm"
        />

        <EmailRow
          title="Test"
          subject="Subject Test"
          description="This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
