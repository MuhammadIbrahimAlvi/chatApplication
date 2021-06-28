import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './HomePage.style';
import SideBar from '../../components/organisms/SideBar/SideBar';
import Chats from '../../components/organisms/Chats/Chats';
import ChatScreen from '../../container/ChatScreen/ChatScreen';
// import {BrowserView, MobileView} from 'react-device-detect';
import MediaQuery from 'react-responsive'

const HomePage = ({ classes }) => {
    return (
        <div className={classes.HomePage}>

            <MediaQuery minDeviceWidth={801}>
            <SideBar />
            <Chats />
             <div style = {{height: '100vh', width:'100%'}}>
            <ChatScreen />  
            </div>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={800}>
                <SideBar />
                <Chats />
            </MediaQuery>


        </div>
    );
}
export default withStyles(styles)(HomePage);
