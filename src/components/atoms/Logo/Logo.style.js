const styles = ({
    Logo: {
        display: 'flex',
        marginTop: '30px',
        marginBottom: '60px',
        width: '45px',
        height: '40px',
        color: 'white',
        backgroundColor: 'orange',
        borderRadius: '25px',
        marginLeft: '25px'
     
    },
    LogoImage:{
        width: '100%',
        height: '100%'
    },
    '@media (max-width: 800px)': {
        Logo: {
            display: 'none'
        },
      }
});

export{ 
    styles
};