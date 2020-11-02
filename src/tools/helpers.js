/** A placeholder function that does nothing. */
export const noOp = () => {};

/** Check for empty strings */
export const isEmptyStr = (value) => value === '';

/** Converts the native value of a checkbox ref value from 'on'/'off' to true/false */
export const getCheckboxValue = (value) => (value === 'on');

/** An asynchronous delay function */
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/** Tool to check for undefined */
export const isUndefined = (value) => typeof value === 'undefined';

/** Tool to check nulls */
export const isNull = (value) => value === null;

/** Used by event handlers to prevent default event behaviour. */
export const preventDefault = (e) => e.preventDefault();

/** Returns true if the specified value is not a number */
export const isNaN = (value) => Number.isNaN(value);

/**
 * Generate a random ID, to avoid using `index` as `key`.
 * Converts a random seed to base 36 (numbers & letters),
 * then takes the first 9 chars after decimal.
 */
export const generateId = () => `_${Math.random().toString(36).substr(2, 9)}`;

/**
 * Returns true if the provided array's length is 0.
 *
 * @param array whose length will be checked.
 * @returns {boolean} indicating whether the array is empty.
 */
export const isEmpty = (array) => array.length === 0;

/**
 * Joins a `baseClassName` together with an array of associated class `modifiers`.
 *
 * @param {string} baseClassName - the class name of the component,
 *  also used for prefixing modifiers
 * @param {object} modifiers - object with keys being the modifier name,
 *  their values being a boolean representing whether the modifier is active
 *
 * @example <caption>Get class names for element 'button' with modifier 'hollow'.</caption>
 * getClassNames('button', { hollow: true })
 * // returns 'button button--hollow'
 *
 */
export function getClassNames(baseClassName, modifiers = {}) {
  const classes = [baseClassName];

  Object.entries(modifiers).forEach(([name, active]) => {
    if (!active) return;

    classes.push(`${baseClassName}--${name}`);
  });

  return classes.join(' ');
}
