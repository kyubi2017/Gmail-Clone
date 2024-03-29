import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  LabelImportant,
  Error,
  MoreVert,
  MoveToInbox,
  WatchLater,
  UnfoldMore,
  Print,
  ExitToApp,
} from "@material-ui/icons";
import React from "react";
import "./Mail.css";
import { useHistory } from "react-router";
import { selectOpenMail } from "./features/mailSlice";
import { useSelector } from "react-redux";



const Mail = () => {
  const history = useHistory();
  const selecteMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selecteMail?.subject}</h2>
          <LabelImportant className="mail__important" />
          <p>{selecteMail?.title}</p>
          <p className="mail__time">{selecteMail?.time}</p>
        </div>

        <div className="mail__message">
          <p>{selecteMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
