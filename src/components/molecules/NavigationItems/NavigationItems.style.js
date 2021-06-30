const styles = ({
    NavLinksContainer: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        // paddingLeft: '25px',
        fontFamily: 'Poppins, sans-serif'
    },
    NavLinks: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    Links:{
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        opacity: '0.7',
        '&:hover' : {
            opacity: '1'
        }

    },
    Name:{
        marginLeft:'8px',
        color: 'white',
        textDecoration: 'none',

    },
    '@media (max-width: 800px)': {
        NavLinksContainer: {
            flexDirection: 'row',
        },
        Name:{
            display:'none'
        },
        Links:{
            margin: '0px 8px',
        },
        navIcons:{
            fontSize: '30px'
        }
      }
  
});

export{ 
    styles
};