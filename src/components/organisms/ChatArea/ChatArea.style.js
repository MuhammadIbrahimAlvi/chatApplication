const styles = ({
    chatAreaContainer: {
        height: '75%',
    },
    ChatArea: {
        boxSizing: 'border-box',
        padding: '10px',
        width: '98%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        height: '95%',
        backgroundColor: 'white',
        overflow: 'auto'
       
    },
    sentMessage:{
        backgroundColor: 'green',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        textAlign: 'right',
        margin:'5px',
        width: '50%'
    },

    receivedMessage:{
        backgroundColor: 'rgb(87, 109, 204)',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'flex-start',
        margin:'5px',
        width: '50%',
        
    },
    chatAreaInput: {
        display: 'flex',
        width: '90%',
        alignItems: 'center',
        justifyItems: 'center',
        
    },
    Input:{
        width: '95%',
        outline: 'none',
        border: 'none',
        alignItems: 'center',
        marginLeft: '10px',
        borderTop: '1px solid lightgray'
    }

    
    });
    
    export {
        styles
    };