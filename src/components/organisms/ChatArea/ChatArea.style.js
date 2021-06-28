const styles = ({
    chatAreaContainer: {
        height: '80%',
        backgroundColor: 'white',
        fontFamily: 'Helvetica'
    },
    ChatArea: {
        boxSizing: 'border-box',
        padding: '10px',
        width: '98%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        height: '94%',
        backgroundColor: 'white',
        overflow: 'auto',
        borderBottom: '1px solid lightgray',
    },
    sentMessage:{
        backgroundColor: 'rgb(87, 109, 204)',
        borderRadius: '20px',
        padding: '10px',
        display: 'flex',
        marginLeft: 'auto',
        // flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        textAlign: 'right',
        margin:'5px',
        width: 'fit-content',
        borderBottomRightRadius: '0px',
        maxWidth: '55%',
        boxShadow: '2px 2px 5px lightgray',
    },
    receivedMessage:{
        backgroundColor: 'rgb(87, 109, 204)',
        borderRadius: '20px',
        borderBottomLeftRadius: '0px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        // alignItems:'flex-start',
        margin:'5px',
        width: 'fit-content',
        maxWidth: '55%',
        boxShadow: '2px 2px 5px lightgray',
    },
    chatAreaInput: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyItems: 'center',
        backgroundColor: 'white',
      
    },
    Input:{
        width: 'calc(100% - 55px)',
        outline: 'none',
        border: 'none',
        alignItems: 'center',
        marginLeft: '12px',
        resize: 'none',
        paddingTop: '8px',
    },
    SendIcon: {
        width:'30px',
        color: 'rgb(87, 109, 204)',
        paddingBottom: '6px'   
    },
    '@media (max-width: 800px)': {
        receivedMessage: {
          maxWidth: '80%'
        },
        sentMessage:{
            maxWidth: '80%'
        }
      }
    });
    export {
        styles
    };
