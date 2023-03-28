import { NumberRange } from "~~/types/NumberRange";
import { Problem } from "./Problem";

export enum Operation {
    addition,
    subtraction,
    multiplication,
    division
}

export class Quiz {
    constructor() {
        this.numberOfQuestions = 5;
        this.operation = Operation.addition;
        this.topNumberRangeChoice = NumberRange.defaultTopNumberRange.name;
        this.bottomNumberRangeChoice = NumberRange.defaultBottomNumberRange.name;
        this.problemList = [];
        this.name = '';
    }

    public generate() {
        this.problemList.length = 0;
        for (let i = 0; i < this.numberOfQuestions; i++) {
            this.problemList.push(this.generateProblem());
          }
    }

    private generateProblem() {
        return new Problem(this.topNumberRange, this.bottomNumberRange, this.operation);
    }

    public name: string;
    public readonly problemList: Problem[];

    public numberOfQuestions: number;
    public operation: Operation;

    public topNumberRangeChoice: string;
    public bottomNumberRangeChoice: string;

    public get topNumberRange(): NumberRange {
        return NumberRange.getNumberRange(this.topNumberRangeChoice)
    }
    public get bottomNumberRange(): NumberRange {
        return NumberRange.getNumberRange(this.bottomNumberRangeChoice)
    }
}
