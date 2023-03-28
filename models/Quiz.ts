import { NumberRange } from "~~/types/NumberRange";
import { OperationChoice, isOperation, defaultOperation } from "~~/types/OperationChoice";
import { Problem } from "./Problem";
import { LocationQuery } from 'vue-router';
import { Optional } from "~~/utils/Optional";

const numberOfRows = 4;

export class Quiz {
    constructor(
        topMin: number = 0,
        topMax: number = 5,
        bottomMin: number = 0,
        bottomMax: number = 5,
        operation: OperationChoice = defaultOperation,
        name: string = '') {
            this.topNumberRange = new NumberRange(topMin, topMax);
            this.bottomNumberRange = new NumberRange(bottomMin, bottomMax);
            this.operationChoice = operation;
            this.kidName = name;
            this.optionalProblemList = new Optional([]);
            this.generateProblems();
        }
        
        private generateProblem() {
            const problem = new Problem(this.topNumberRange, this.bottomNumberRange, this.operationChoice);
            problem.generate();
            return problem;
        }
        
        public kidName: string;
        public optionalProblemList: Optional<Problem[][]>;
        public generateProblems(): void {
            this.optionalProblemList = new Optional<Problem[][]>([]); 
            for (let i = 0; i < numberOfRows; i++) {
                this.optionalProblemList.value.push(this.generateRow());
            }
        }
        
        private generateRow() {
            const problemList: Problem[] = [];
            for (let i = 0; i < this.rowLength; i++) {
                problemList.push(this.generateProblem());
            }
            return problemList;
        }
        
        public get invalid(): boolean {
            return this.topNumberRange.invalid || this.bottomNumberRange.invalid;
        }
        
        public topNumberRange: NumberRange;
        public bottomNumberRange: NumberRange;
        public operationChoice: OperationChoice;
        
        public get topNumberRangeLabel(): string {
            if (this.operationChoice == 'division') {
                return 'Quotient Range';
            }
            return 'Top Range';
        }
        
        public toParams(): Record<string, string> {
            return {
                topmin: this.topNumberRange.min.toString(),
                topmax: this.topNumberRange.max.toString(),
                bottommin: this.bottomNumberRange.min.toString(),
                bottommax: this.bottomNumberRange.max.toString(),
                operation: this.operationChoice,
                name: this.kidName
            }
        }
        
        private static validateNumber(params: LocationQuery, key: string): number {
            const parsedInt = parseInt(params[key] as string);
            if (isNaN(parsedInt)) {
                throw `Expected ${key} to be a number but instead saw "${params[key]}"` 
            }
            return parsedInt;
        }
        
        public static fromParams(params: LocationQuery) {
            const operation: string = params['operation'] as string;
            if (!isOperation(operation)) {
                throw `Operation "${params['operation']}" is not implemented`
            }
            return new Quiz(this.validateNumber(params, 'topmin'),
            this.validateNumber(params, 'topmax'),
            this.validateNumber(params, 'bottommin'),
            this.validateNumber(params, 'bottommax'),
            operation,
            params['name'] as string);
        }
        
        public get rowLength(): number {
            return Math.min(this.rowLengthFromBottom, this.rowLengthFromTop);
        }
        
        public get rowLengthFromBottom(): number {
            switch (this.bottomNumberRange.digits) {
                case 1:
                return 7;
                case 2:
                return 5;
                case 3:
                return 5;
                case 4:
                return 4;
                case 5:
                return 3;
                case 6:
                return 3;
                case 7:
                return 3;
                default:
                return 1;
            }
        }
        
        public get rowLengthFromTop(): number {
            switch (this.topNumberRange.digits) {
                case 1:
                return 7;
                case 2:
                return 7;
                case 3:
                return 5;
                case 4:
                return 5;
                case 5:
                return 5;
                case 6:
                return 5;
                case 7:
                return 5;
                default:
                return 5;
            }
        }
        
    }
    