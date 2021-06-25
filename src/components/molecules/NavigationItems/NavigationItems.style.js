const styles = ({
    NavLinksContainer: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Helvetica'
    },
    NavLinks: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    Links:{
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        opacity: '0.7',
        '&:hover' : {
            // backgroundColor: 'rgba(255,255,255,0.2)'
            opacity: '1'
        }

    },
    Name:{
        marginLeft:'8px'
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