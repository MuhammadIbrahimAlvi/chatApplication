const styles = ({
    chatAreaContainer: {
        height: '78%',
        backgroundColor: 'white',
        fontFamily: 'Poppins',
        overflowY: 'scroll',
        padding: '10px'
    },
    // ChatArea: {
    //     boxSizing: 'border-box',
    //     padding: '10px',
    //     width: '100%',
    //     margin: 'auto',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     color: 'white',
    //     height: '90%',
    //     backgroundColor: 'white',
    //     borderBottom: '1px solid lightgray',
    // },
    sentMessage: {
        backgroundColor: 'gray',
        borderRadius: '20px',
        padding: '10px',
        display: 'flex',
        marginLeft: 'auto',
        alignItems: 'flex-end',
        textAlign: 'right',
        margin: '5px',
        width: 'fit-content',
        borderBottomRightRadius: '0px',
        maxWidth: '55%',
        boxShadow: '2px 2px 5px lightgray',
        color: 'white'
    },
    receivedMessage: {
        backgroundColor: 'rgb(87, 109, 204)',
        borderRadius: '20px',
        borderBottomLeftRadius: '0px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        margin: '5px',
        width: 'fit-content',
        maxWidth: '55%',
        boxShadow: '2px 2px 5px lightgray',
    },
    chatAreaInput: {
        display: 'flex',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyItems: 'center',
        backgroundColor: 'white',
    },
    Input: {
        width: 'calc(100% - 55px)',
        outline: 'none',
        border: 'none',
        alignItems: 'center',
        marginLeft: '12px',
        resize: 'none',
        paddingTop: '8px',
        // height: '100%'
    },
    SendIcon: {
        width: '30px',
        color: 'rgb(87, 109, 204)',
        paddingBottom: '6px'
    },
    '@media (max-width: 800px)': {
        receivedMessage: {
            maxWidth: '80%'
        },
        sentMessage: {
            maxWidth: '80%'
        }
    }
});
export {
    styles
};
