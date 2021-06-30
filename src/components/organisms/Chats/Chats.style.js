const styles = ({
    Chats: {
        padding:'8px 8px',
        width: '25%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '12%',
        backgroundColor: 'rgba(231, 233, 248,0.4)',
        fontFamily: 'Poppins',
        fontSize:'22px',
        height: '90%',
        '& h4':{
            margin: '12px 10px',
            height: '10%'
        }
        },
        '@media (max-width: 1030px)': {
            Chats: {
                width: '45%',
                marginLeft: '15%'
            }
          },
      
        '@media (max-width: 800px)': {
            Chats: {
                marginLeft: '0px',
                width:'100%',
                height: '90vh',
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