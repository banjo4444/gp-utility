import {
    func,
    instanceOf,
    oneOfType,
    shape,
    string,
    number,
} from 'prop-types';
import React from 'react';

import {
    noOp,
} from '../../../tools/helpers';

import './input.scss';

const renderSubLabel = (label, name) => label
    && (
        <div className="input__sub-label">
            <label htmlFor={ `label-${ name }` }>{ label }</label>
        </div>
    );

const renderInput = (inputRef, type, name, placeholder, onChange, min, max, step) => (
    <>
        <input
            ref={ inputRef }
            type={ type }
            name={ name }
            placeholder={ placeholder }
            onChange={ onChange }
            min={ min }
            max={ max }
            step={ step }
        />
    </>
);

const Input = ({ type, inputRef, name, placeholder, onChange, label, min, max, step }) => (
    <div className="input">
        <div className="input__input-wrapper">
            { renderInput(inputRef, type, name, placeholder, onChange, min, max, step) }
        </div>
        { renderSubLabel(label, name) }
    </div>
);

Input.defaultProps = {
    type: 'text',
    inputRef: null,
    name: '',
    onChange: noOp,
    label: undefined,
    min: undefined,
    max: undefined,
    step: undefined,
};

Input.propTypes = {
    type: string,
    inputRef: oneOfType([
        func, // either a function
        shape({ // or an object shaped like this
            current: instanceOf(Element),
        }),
    ]),
    name: string,
    onChange: func,
    label: string,
    min: number,
    max: number,
    step: number,
    placeholder: string.isRequired,
};

export default Input;
