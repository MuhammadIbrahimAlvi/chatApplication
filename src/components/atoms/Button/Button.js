import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from "./Button.style";

const ButtonComponent = ({classes,...props}) =>{
    return(
        <Button className={classes.ButtonStyle} variant="outlined"
        type = {props.type}
        >
        {props.children}</Button>
    );
    } 
export default withStyles(styles)(ButtonComponent);