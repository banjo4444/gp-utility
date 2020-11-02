import React, {createRef} from 'react';

import Card from "../../../common/Card";

import "./driver-role-calculator.scss";
import {isEmptyStr} from "../../../../tools/helpers";

class DriverRoleCalculator extends React.Component<any, any> {
    creditRef: React.RefObject<any>;
    burnRef: React.RefObject<any>;

    constructor(props: any) {
        super(props);

        this.state = {
            calcComplete: false,
            valid: false,
            checked: false
        };

        this.creditRef = createRef();
        this.burnRef = createRef();
    }

    calculateXP = (): void => {
        const credits: number = this.creditRef.current.value;
        const intensiveTraining: boolean = this.state.checked;
        const burnsPerDay: boolean = this.burnRef.current.value;

        console.log(credits, intensiveTraining, burnsPerDay);

        // this assumes you will perform burnsPerDay burns per day, for 30 days (a month).

        // 3.6m
        // const threeFiftyQM: number = 3594244;




        // if (isNaN(this.repRef.current.value)) {
        //     this.setState({ calcComplete: false});
        //
        //     return;
        // }

        // const targetRep: number = this.repRef.current.value;
        //
        // const desiredRep: number = targetRep * 2;
        //
        // const specs: number = Math.round((desiredRep / 3.3) / 360);
        // const hitmen: number = Math.round(specs * 1.65);
        // const thugs: number = Math.round(hitmen * 2.2);
        //
        // this.setState({
        //     calcComplete: true,
        //     desiredRep,
        //     specs,
        //     hitmen,
        //     thugs
        // });
    }

    renderResult = (): JSX.Element => (
        <div className="result pb-4 ">
            <h4>Buy the following amount of gangsters:</h4>
        </div>
    );

    isValid = (): boolean => {
        return !(isEmptyStr(this.creditRef.current.value) || isNaN(this.creditRef.current.value) ||
            isEmptyStr(this.burnRef.current.value));
    };

    onChange = (): void => {
        this.setState({valid: this.isValid()});
    };

    onCheckboxChange = (event: any): void => {
        this.setState({checked: event.target.checked});
    };

    render(): JSX.Element {
        return (
            <Card title="Driver Role XP Calculator">
                <div className="calculator pt-4 pb-4">
                    <div className="form-group">
                        <label className="pr-3">How many credits are you willing to use?</label>
                        <input
                            ref={this.creditRef}
                            onChange={this.onChange}
                            placeholder="Number of credits"
                            type="number"
                            min={0}
                            defaultValue={1}
                        />
                    </div>
                    <div className="form-group">
                        <label className="pr-3">
                            Will you use intensive training for all of your burns?
                        </label>
                        <input
                            onChange={this.onCheckboxChange}
                            type="checkbox"
                            checked={this.state.checked}
                        />
                    </div>
                    <div className="form-group">
                        <label className="pr-3">How many times will you burn per day?</label>
                        <input
                            ref={this.burnRef}
                            onChange={this.onChange}
                            placeholder="Number of burns"
                            type="number"
                            min={1}
                            max={4}
                            defaultValue={1}
                        />
                        <label className="pt-2 font-weight-bold">
                            NOTE: It is impossible to burn more than 4 times per day
                        </label>
                    </div>
                    <div className="calculator__action">
                        <button disabled={!this.state.valid} onClick={this.calculateXP}>Calculate</button>
                    </div>
                </div>
                {this.state.calcComplete && this.renderResult()}
            </Card>
        );
    }

}

export default DriverRoleCalculator;
