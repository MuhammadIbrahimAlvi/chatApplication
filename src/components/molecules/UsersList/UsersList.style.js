const styles = ({
UsersListContainer: {
    overflow: 'auto',
    height: '75vh',
    width: '100%',
    backgroundColor: 'white',
    backgroundColor: 'rgba(231, 233, 248,0.4)',
    '& :hover': {
        opacity: '0.9'
    }
},
UsersList:{
    display: 'flex',
    // width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 18px',
    margin: '2px 2px',
    borderBottom : '1px solid rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '5px',
    // boxShadow: '2px 2px 5px lightgray',
    '& :hover': {
        opacity: '0.9'
    }
    
},
UserCard: {
    display: 'flex',
    alignItems: 'center',
    '& :hover': {
        opacity: '0.9'
    }
},
userName: {
    marginLeft: '10px',
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'Poppins',
    fontSize: '15px',
    '& :hover': {
        opacity: '0.9'
    }
}

});

export {
    styles
};