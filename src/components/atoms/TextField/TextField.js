import { withStyles } from "@material-ui/core";
import { styles } from "./TextField.style";
import TextField from '@material-ui/core/TextField';

const InputField = ({
    classes,
    children,
    placeholder,
    inputType,
    value,
    name,
    onChange,
    ...props
     }) => {
    // console.log(props);
    return(
        <TextField
        InputLabelProps={{
            shrink: true,
           }}
        id="outlined-basic"
        className={classes.InputStyle}
        label={children} 
        placeholder = {placeholder}
        inputType = {inputType}
        value = {value}
        name = {name}
        onChange = {onChange}
        required
        {...props}  
        />
    );
    }
    
export default withStyles(styles)(InputField);