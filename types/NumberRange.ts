export class NumberRange {
    constructor(min: number, max: number) {
        this._min = min;
        this._max = max;
    }
    
    private readonly _min: number;
    private readonly _max: number;
    
    public get name(): string {
        return `${this._min}-${this._max}`;
    }
    public get pick(): number {
        return Math.floor(Math.random() * this._max + 1 - this._min) + this._min;
    }
    public static get defaultTopNumberRange(): NumberRange {
        return this.options[0];
    }
    public static get defaultBottomNumberRange(): NumberRange {
        return this.options[1];
    }
    
    public static getNumberRange(choice: string) {
        if (!NumberRange._numberRangeHash) {
            NumberRange._numberRangeHash = {};
            NumberRange.options.forEach(numberRange => {
                NumberRange._numberRangeHash![numberRange.name] = numberRange;
            });
        }
        return NumberRange._numberRangeHash[choice];
    }
    
    private static _numberRangeHash: Record<string, NumberRange> | undefined;
    
    public static readonly options: NumberRange[] = [
        new NumberRange(0, 5),
        new NumberRange(6, 10),
        new NumberRange(11, 15),
        new NumberRange(16, 20),
        new NumberRange(21, 30),
        new NumberRange(31, 50),
        new NumberRange(51, 100),
        new NumberRange(101, 200),
        new NumberRange(201, 500),
        new NumberRange(501, 1000),
        new NumberRange(1001, 10000),
    ];
}

