const styles = ({
    MainHeader: {
        boxSixing: 'border-box',
     display: 'flex',
     justifyContent: 'flex-end',
     alignItems: 'center',
     height: '10%',
     width: '100%',
     backgroundColor: 'rgba(231, 233, 248,0.4)'
    },
    HeaderItems: {
        marginRight: '25px',
        marginLeft: '8px',
        color: 'rgba(0,0,0,0.4)',
        fontSize: '28px'
    },
    UserCard: {
    display:'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(69, 93, 199)',
    padding: '0px 10px',
    borderRadius: '5px',
    color: 'white',
    justifyContent: 'space-evenly',
    width: '155px',
    marginRight: '25px',
    boxShadow: '2px 2px 5px lightgray',
    },
    '@media (max-width: 800px)': {
        MainHeader: {
        height: '10vh',
        },
     HeaderItems: {
            marginRight: '10px',
            fontSize: '25px'
        },
        UserCard: {
            width: '145px',
            padding:'0',
          '& h4':{
              margin:'10px'
          },
          marginRight: '8px'
            },
        
      }

});

export{ 
    styles
};