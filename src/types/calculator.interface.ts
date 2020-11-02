export interface Calculator {
    calculate(): void;
    back(): void;
    isValid(): boolean;
    onChange(): void;
    render(): JSX.Element;
    renderResult(): JSX.Element;
}
