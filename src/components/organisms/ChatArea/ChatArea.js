import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ChatArea.style';
import SendIcon from '@material-ui/icons/Send';

const ChatArea = ({ classes }) => {
    return (
        <div className={classes.chatAreaContainer}>

            <div className={classes.ChatArea}>

                <div className={classes.sentMessage}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, deleniti? adipisicing elit. Quas, deleniti?
                    </p>
                </div>

                <div className={classes.receivedMessage}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

            </div>

            <div class="chatAreaInput">
                <textarea name="text" className={classes.Input} rows="2" placeholder="Type a message...">
                </textarea>
                <SendIcon className={classes.SendIcon}/>
            </div>

        </div>


    );
}

export default withStyles(styles)(ChatArea);