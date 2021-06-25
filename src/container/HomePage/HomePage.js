import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './HomePage.style';
import SideBar from  '../../components/organisms/SideBar/SideBar';
import Chats from '../../components/organisms/Chats/Chats';
import ChatScreen from '../../container/ChatScreen/ChatScreen';

const HomePage = ({ classes }) => {
    return (
        <div className={classes.HomePage}>
            <SideBar />
            <Chats />
            {/* <div style = {{height: '100vh', width:'100%'}}>
            <ChatScreen />
            </div> */}
            
        </div>
    );
}
export default withStyles(styles)(HomePage);
