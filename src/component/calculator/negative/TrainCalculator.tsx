import React, {createRef} from 'react';

import Button from "../../common/button/Button";
import Card from "../../common/Card";
import Input from "../../common/input/Input";

import {Calculator} from "../../../types/calculator.interface";
import {isEmptyStr} from "../../../tools/helpers";

import {calculateTrain} from "../../../tools/calculator";

import "./train-calculator.scss";

class TrainCalculator extends React.Component<any, any> implements Calculator {
    labRef: React.RefObject<any>;
    multiHittersRef: React.RefObject<any>;

    constructor(props: any) {
        super(props);

        this.state = {
            calcComplete: false,
            valid: false,
        };

        this.labRef = createRef();
        this.multiHittersRef = createRef();
    }

    back = (): void => {
        const {history} = this.props;

        history.push("/");
    };

    isValid = (): boolean => {
        return !(isEmptyStr(this.labRef.current.value) || isNaN(this.labRef.current.value) ||
            isEmptyStr(this.multiHittersRef.current.value) || isNaN(this.multiHittersRef.current.value));
    };

    onChange = (): void => {
        this.setState({valid: this.isValid()});
    };

    render(): JSX.Element {
        return (
            <Card title="Train Calculator">
                <div className="train-calculator pt-5 pl-5 pr-5 pb-4">
                    <div className="train-calculator__form">
                        <Input
                            placeholder="1-4"
                            inputRef={this.labRef}
                            onChange={this.onChange}
                            type="number"
                            min={1}
                            max={4}
                            label="How many labs does the target have?"
                        />
                        <Input
                            placeholder="5"
                            inputRef={this.multiHittersRef}
                            onChange={this.onChange}
                            type="number"
                            min={1}
                            max={15}
                            label="How many attackers have multiple labs?"
                        />
                    </div>
                    <div className="train-calculator__actions mt-4">
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
        const labCount: number = this.labRef.current.value;
        const multiHitters: number = this.multiHittersRef.current.value;

        const membersForTrain: number = calculateTrain(labCount, multiHitters);

        this.setState({membersForTrain, calcComplete: true});
    }

    renderResult = (): JSX.Element => {
        const {membersForTrain} = this.state;

        return (
            <div className="train-calculator__result text-center">
                <h5 className="pt-5">
                    {`Attackers required to pop all labs: ${membersForTrain}`}
                </h5>
                <h5>
                    This is assuming all attackers deal max damage. (CC trains should double this number)
                </h5>
            </div>
        );
    };

}

export default TrainCalculator;
