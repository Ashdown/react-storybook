import React from 'react';
import { createUseStyles } from 'react-jss'

const red = 'red';
const white = 'white';

const getStyles = createUseStyles({
    customButton: {
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: red,
        color: white,
    },
    //not sure I like this...should be nested maybe
    buttonText: {
        textTransform: 'capitalize',
    }

});
interface props {
    text?: string
}

const CustomButton:React.FC<props> = ({ text = "Click" }) => {
    const styles = getStyles();
    return <button className={styles.customButton}>
        <span className={styles.buttonText}>{text}</span>
    </button>
};

export default CustomButton