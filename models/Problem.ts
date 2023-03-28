import { NumberRange } from '~/types/NumberRange'
import { OperationChoice, operationIcon } from '~~/types/OperationChoice';

export class Problem {
    constructor(topNumberRange: NumberRange,
        bottomNumberRange: NumberRange,
        operation: OperationChoice) {
            this._topNumberRange = topNumberRange;
            this._bottomNumberRange = bottomNumberRange;
            this._operation = operation;
            this.topNumber = 0;
            this.bottomNumber = 0;
        }
        
        private readonly _topNumberRange: NumberRange;
        private readonly _bottomNumberRange: NumberRange;
        private readonly _operation: OperationChoice;
        
        public topNumber: number;
        public bottomNumber: number;
        
        public generate(): void {
            this.generateBottomNumber();
            this.generateTopNumber();
        }

        public get cardWidth(): string {
            const topLength = this._topNumberRange.max.toString().length - 4;
            const bottomLength = this._bottomNumberRange.max.toString().length - 2;
            const length = Math.max(topLength, bottomLength);
            const cardWidth = 150 + length * 25;
            return `${cardWidth}px`;
        }
        
        public generateBottomNumber(): void {
            if (this._operation == 'division') {
                this.bottomNumber = this._bottomNumberRange.pickNonZero;
            }
            else {
                this.bottomNumber = this._bottomNumberRange.pick;
            } 
        }
        public generateTopNumber(): void {
            if (this._operation == 'division') {
                const topPick = this._topNumberRange.pickNonZero;
                this.topNumber = topPick * this.bottomNumber;
            }
            else {
                this.topNumber = this._topNumberRange.pick;
            }
        }
        
        public get operationIcon(): string {
            return operationIcon(this._operation);
        }
    }
    