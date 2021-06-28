const styles = ({
    Chats: {
        padding:'20px 8px',
        width: '17%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '12%',
        backgroundColor: 'rgba(231, 233, 248,0.4)'
        },
        '@media (max-width: 800px)': {
            Chats: {
                marginLeft: '0px',
                width:'100%',
                height: '85vh',
                '& h4':{
                    margin:'0px',
                    fontSize: '30px',
                    color: 'rgba(69, 93, 199,0.9)'
                }
            }
          }
});

export {
    styles
};