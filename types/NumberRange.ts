export class NumberRange {
    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
        this.range = '1-5';
        this.invalid = false;
    }
    
    public range: string;
    public fixRange() {
        this.invalid = true;
        const pieces = this.range.split('-').map((piece) => piece.trim());
        if (pieces.length > 1)  {
            const min = parseInt(pieces[0]);
            const max = parseInt(pieces[1]);
            if (!isNaN(min) && !isNaN(max)) {
                if (min < max) {
                    if (max.toString().length < 8) {
                        this.invalid = false;
                        this.min = min;
                        this.max = max;
                        this.range = `${this.min}-${this.max}`;
                    }
                }
            }
        }
    }
    
    public invalid: boolean;
    public min: number;
    public max: number;
    
    public get pick(): number {
        return Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min;
    }
    public get pickNonZero(): number {
        const min = Math.max(1, this.min);
        return Math.floor(Math.random() * (this.max + 1 - min)) + min;
    }
    
    public get digits(): number {
        return this.max.toString().length;
    }
}
