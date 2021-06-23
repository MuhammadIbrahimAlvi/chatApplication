import BackgroundImage from '../../images/background1.jpg';
const styles = ({
    LoginPage: {
        display: 'flex',
        boxSizing: 'border-box'
    },
    FormLeft: {
       background: `linear-gradient(0deg, rgb(48, 72, 168),rgba(48, 72, 128,0.2)), url(${BackgroundImage})`,
       boxShadow: '0 10px 10px -5px gray',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
       width: '55%',
       height: '100vh',
       borderRadius: '0px 270px 650px 0px',
       alignItems: 'center',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       color: 'white',
       fontSize: '1.3em',
       letterSpacing: '0.13em',
       fontFamily: 'Lato'
    }
});

export{ 
    styles
};