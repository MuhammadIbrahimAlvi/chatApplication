const styles = ({
    LoginForm: {
        display: 'flex',
        flexDirection:'column',
        width: '22%',
        margin: 'auto',
        marginLeft: '80px',
        height: 'fit-content',
        alignItems: 'center',
        justifyItems: 'center'
    },
    GoogleLogo:{
        width: '25px',
        height: '25px',
        marginRight: '20px',
        backgroundColor: 'white',
        borderRadius: '50%'
    },
    '@media (max-width: 800px)': {
    LoginForm:{
        width: '80%',
        marginLeft:'0',
        position: 'absolute',
        borderRadius: '25px',
        marginTop: '20%',
        backgroundColor:'rgba(255,255,255,0.4)',
        padding: '12px'

    }
    
    }
});

export{ 
    styles
};