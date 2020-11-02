import React from 'react';
import {
    bool,
    func,
    string,
} from 'prop-types';
import {
    getClassNames,
    noOp,
} from '../../../tools/helpers';

import './button.scss';

const Button = ({ label, onClick, hollow, small, disabled, }) => (
    <button
        disabled={ disabled }
        className={ getClassNames('button', { hollow, small, disabled }) }
        onClick={ onClick }
    >
        { label }
    </button>
);

Button.defaultProps = {
    onClick: noOp,
    hollow: false,
    small: false,
    medium: false,
    disabled: false,
};

Button.propTypes = {
    label: string.isRequired,
    onClick: func,
    hollow: bool,
    small: bool,
    medium: bool,
    disabled: bool,
};

export default Button;
