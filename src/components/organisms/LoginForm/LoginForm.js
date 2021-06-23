import { withStyles } from '@material-ui/core/styles';
import Button from '../../atoms/Button/Button';
import TextField from '../../atoms/TextField/TextField';
import Heading from '../../atoms/Heading/Heading';
import { styles } from './LoginForm.style';
import GoogleLogo from '../../../images/google-logo.png'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

const LoginForm = ({ classes }) => {

    const validationSchema = yup.object({
        userName: yup.string('Enter username').required('username is required').matches(/^[a-zA-Z]+$/, 'Enter a valid username'),
        password: yup.string('Enter your password').required('password is required')
    });

    const formik = useFormik(({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    }));

    return (
        <div className={classes.LoginForm}>
            <Heading heading="Login" />
            <form onSubmit = {formik.handleSubmit}>
            <TextField
                placeholder="Enter Username"
                inputType='text'
                onChange={formik.handleChange}
                name='userName'
                value={formik.values.userName}
                error={Boolean(formik.errors.userName)}
                helperText={formik.errors.userName}
            >Username</TextField>
            <TextField
                placeholder="Enter Password"
                inputType='password'
                onChange={formik.handleChange}
                name='password'
                value={formik.values.password}
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
            >Password</TextField>
            <Button
            type="submit"
            >Sign in</Button>
            </form>
            <Button><img src={GoogleLogo} className={classes.GoogleLogo} alt="" /> Sign in with Google</Button>

            <p>Don't have an account <NavLink  to ='/RegisterPage'> Register Now!</NavLink> </p>
          
        </div>
    );
}

export default withStyles(styles)(LoginForm);