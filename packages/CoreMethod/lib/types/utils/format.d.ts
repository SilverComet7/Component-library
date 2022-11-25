declare type FormatOption = "jsx" | "label" | "value";
declare type NeedFormatType = string | string[] | number | any;
interface Option {
    label: string;
    value: any;
    color?: string;
}
export declare function formatOption(rowOrId: NeedFormatType, column?: any, option?: Option[], formatWay?: FormatOption): any;
export {};
