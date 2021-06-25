const styles = ({
    SideBar: {
        width: '12%',
        padding: '10px',
        boxSizing: 'border-box',
        height: '100%',
        position: 'fixed',
        backgroundColor: 'rgba(69, 93, 199,0.9)',
        display: 'flex',
        zIndex: '100',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Links:{
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        opacity: '0.7',
        fontWeight: 'bold',
        '&:hover' : {
            opacity: '1'
        }
    },
  
    NavLinks: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'white'
    },
    Name:{
        marginLeft:'8px'
    },
    '@media (max-width: 800px)': {
        SideBar: {
            position: 'fixed',
            width: '100%',
            height: '10vh',
            borderTop: '2px solid gray',
            left: '0',
            bottom: '0',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
      }
});

export{ 
    styles
};