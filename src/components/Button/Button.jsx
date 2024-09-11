// src/components/CustomButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const CustomButton = ({ variant, disabled, title, className, handleOnClick, size, ...rest }) => {
    const buttonClass = `custom-button ${variant} ${size} ${className}`;

    return (
        <button
            className={buttonClass}
            disabled={disabled}
            onClick={handleOnClick}
            {...rest}
        >
            {title}
        </button>
    );
};

CustomButton.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
    title: PropTypes.oneOfType(PropTypes.string, PropTypes.node).isRequired,
    className: PropTypes.string,
    handleOnClick: PropTypes.func,
    disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
    variant: 'primary',
    className: '',
    disabled: false,
};

export default CustomButton;
