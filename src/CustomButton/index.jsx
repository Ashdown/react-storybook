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
        buttonText: {
            textTransform: 'capitalize',
        }
    }
});

const CustomButton = ({ text = "Click" }) => {
    const styles = getStyles();
    return <button className={styles.customButton}>
        <span className={styles.customButton.buttonText}>{text}</span>
    </button>
};

export default CustomButton