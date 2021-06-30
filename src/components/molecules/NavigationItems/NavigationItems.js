import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./NavigationItems.style";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "../../atoms/Button/Button";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useSelector } from "react-redux";


const NavigationItems = ({ classes }) => {
  const secretId = useSelector((state) => state.current_user.user_id);

  const [text, setText] = useState(secretId);
  const [isCopied, setIsCopied] = useState(false);
  // const [visibility, setVisibility] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const navLinks = [
    {
      to: "",
      name: "Message",
      iconComponent: <ChatBubbleOutlineIcon className={classes.navIcons} />,
    },
    {
      to: "",
      name: "Find",
      iconComponent: <PeopleOutlineIcon className={classes.navIcons} />,
    },
    {
      to: "",
      name: "Payments",
      iconComponent: <LocalAtmIcon className={classes.navIcons} />,
    },
    {
      to: "",
      name: "Settings",
      iconComponent: <SettingsIcon className={classes.navIcons} />,
    },
  ];

  return (
    <div>
      <div className={classes.NavLinksContainer}>
        {navLinks.map((link) => (
          <p key={link.name} className={classes.NavLinks}>
            <a className={classes.Links} href={link.to}>
              {link.iconComponent}
              <span className={classes.Name}>{link.name}</span>
            </a>
          </p>
        ))}

        {/* <div className="container">
          {visibility ? (
            <input
              type="text"
              value={secretId}
              placeholder="Type some text here"
              onChange={(event) => setText(event.target.value)}
            />
          ) : null}
          <CopyToClipboard text={text} onCopy={onCopyText}>
            <div className="copy-area">
              <button>Copy to Clipboard</button>
              <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                Copied!
              </span>
            </div>
          </CopyToClipboard>
          <InfoIcon
            titleAccess="Show Clipboard"
            onClick={() => setVisibility(!visibility)}
          />
          </div> */}
      </div> 
    </div>
  );
};

export default withStyles(styles)(NavigationItems);
