import { withStyles } from "@material-ui/core";
import { styles } from "./Heading.style.js";

const Heading = ({
    classes,
    heading
     }) => {
    // console.log(props);
    return(
        <h2 className={classes.HeadingStyle}>
            {heading}
        </h2>
    );
    }
    
export default withStyles(styles)(Heading);