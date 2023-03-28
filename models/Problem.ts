import { NumberRange } from "~~/types/NumberRange";
import { Operation } from "./Quiz";

export class Problem {
    constructor(topNumberRange: NumberRange,
                bottomNumberRange: NumberRange,
                operation: Operation) {
        this._topNumberRange = topNumberRange;
        this._bottomNumberRange = bottomNumberRange;
        this._operation = operation;
    }

    private readonly _topNumberRange: NumberRange;
    private readonly _bottomNumberRange: NumberRange;
    private readonly _operation: Operation;

    public get topNumber(): number {
        return this._topNumberRange.pick;
    }
    public get bottomNumber(): number {
        return this._bottomNumberRange.pick;
    }

    public get operation(): string {
        switch (this._operation)
        {
            case Operation.addition:
                return '+';
            case Operation.subtraction:
                return '-';
            case Operation.multiplication:
                return '*';
            case Operation.division:
                return '/';
        }
    }
}
