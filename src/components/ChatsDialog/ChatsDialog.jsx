import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon24Add } from "@vkontakte/icons";

import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

const emails = ["username@gmail.com", "user02@gmail.com", "test@lol.net"];
//documentation https://material-ui.com/ru/styles/api/#makestyles-styles-options-hook
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  testClass: {
    fontSize: "10em"
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    props.addChat(value);
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account"  className={ classes.testClass }/>
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button
        mode="secondary"
        size="l"
        before={<Icon24Add />}
        onClick={handleClickOpen}
      >
        New chat
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        addChat={props.add}
      />
    </div>
  );
}
