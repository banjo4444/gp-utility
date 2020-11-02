import React, {createRef} from 'react';

import Button from "../../common/button/Button";
import Card from "../../common/Card";
import Input from "../../common/input/Input";

import {Calculator} from "../../../types/calculator.interface";
import {StealResult} from "../../../types/steal-result.model";

import {calculateSteal} from "../../../tools/calculator";
import {isEmptyStr} from "../../../tools/helpers";

import "./steal-calculator.scss";

class StealCalculator extends React.Component<any, any> implements Calculator {
    repRef: React.RefObject<any>;

    constructor(props: any) {
        super(props);

        this.state = {
            calcComplete: false,
            valid: false,
        };

        this.repRef = createRef();
    }

    back = (): void => {
        const {history} = this.props;

        history.push("/");
    };

    isValid = (): boolean => {
        if (isEmptyStr(this.repRef.current.value)) {
            return false;
        }

        // pure number. no symbols.
        if(!isNaN(Number(this.repRef.current.value))) {
            return true;
        }

        // whole or decimal number, ending with any one of the specified characters.
        const regexp: RegExp = new RegExp("^[1-9]\\d*(\\.\\d+)?[kKmMbB]$");

        return regexp.test(this.repRef.current.value);
    };

    onChange = (): void => {
        this.setState({valid: this.isValid()});
    };

    render(): JSX.Element {
        return (
            <Card title="Steal Calculator">
                <div className="steal-calculator pt-5 pl-5 pr-5 pb-4">
                    <div className="steal-calculator__form">
                        <Input
                            placeholder="Examples: 500, 1k, 1.2m, 10b, etc."
                            inputRef={this.repRef}
                            onChange={this.onChange}
                            label="Enter max rep"
                        />
                    </div>
                    <div className="steal-calculator__actions mt-4">
                        <Button
                            label="Calculate"
                            onClick={this.calculate}
                            disabled={!this.state.valid}
                        />
                        <Button label="Back" onClick={this.back} />
                    </div>
                    {this.state.calcComplete && this.renderResult()}
                </div>
            </Card>
        );
    }

    calculate = (): void => {
        const maxRep: number = this.repRef.current.value;

        const stealResult: StealResult = calculateSteal(maxRep);

        this.setState({stealResult, calcComplete: true});
    }

    renderResult = (): JSX.Element => {
        const {stealResult: {moneyPretty}} = this.state;

        return (
            <div className="steal-calculator__result text-center">
                <h5 className="pt-5">
                    {`Cash to put out: $${moneyPretty}`}
                </h5>
            </div>
        );
    };

}

export default StealCalculator;
