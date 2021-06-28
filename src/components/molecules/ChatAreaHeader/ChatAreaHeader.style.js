const styles = ({
    ChatAreaHeader: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 20px',
        width: '100%',
        margin: 'auto',
        backgroundColor: 'white',
        borderBottom: '1px solid lightgray',
        height: '8%',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px'
    },
    ChatHeader_Left:{
        display: 'flex',
        alignItems: 'center',
    },
    ChatHeader_Right: {
        color: 'lightgray',

    },
    '@media (max-width: 800px)': {
        ChatAreaHeader: {
         boxShadow: '5px 5px 10px gray',
        }
      }
    }); 
    export {
        styles
    };