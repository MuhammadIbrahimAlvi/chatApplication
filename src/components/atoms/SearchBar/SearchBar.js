import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchBar.style';
import SearchIcon from '@material-ui/icons/Search';

const SeacrhBar = ({ classes }) => {
    return (
        <div className = {classes.SearchBar}>
            <SearchIcon className={classes.SearchIconStyle} />
            <input
            className = {classes.SearchInput}
             placeholder="Search here..."
            >
            </input>
        </div>
    );
}
export default withStyles(styles)(SeacrhBar);