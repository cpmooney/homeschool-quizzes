export const OperationChoiceList = [
    'addition',
    'subtraction',
    'multiplication',
    'division'
] as const;

export type OperationChoice = typeof OperationChoiceList[number];

export const isOperation = (operation: string): operation is OperationChoice => 
    ([...OperationChoiceList] as string[]).includes(operation);

export const defaultOperation = OperationChoiceList[1];

export const operationIcon = (operation: OperationChoice): string => {
    switch (operation)
    {
        case 'addition':
            return 'mdi-plus';
        case 'subtraction':
            return 'mdi-minus';
        case 'multiplication':
            return 'mdi-close';
        case 'division':
            return 'mdi-division';
    }
}