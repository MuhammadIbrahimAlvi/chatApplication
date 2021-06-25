const styles = ({
    RegisterForm: {
        padding: '20px',
        display: 'flex',
        flexDirection:'column',
        width: '22%',
        height: '300px',
        margin: 'auto',
        marginLeft: '80px',
        justifyContent: 'space-between',
        height: 'fit-content',
        alignItems: 'center',
        justifyItems: 'center'
    },
    '@media (max-width: 800px)': {
        RegisterForm:{
            width: '80%',
            marginLeft:'0',
            position: 'absolute',
            borderRadius: '25px',
            marginTop: '10%',
            backgroundColor:'rgba(255,255,255,0.4)',
            padding: '12px'
    
        }
        
        }
});

export{ 
    styles
};