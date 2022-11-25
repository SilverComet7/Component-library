import { JSON2SheetOpts, WritingOptions } from "xlsx";
export interface JsonToSheet<T = any> {
    data: T[];
    header?: T;
    filename?: string;
    json2sheetOpts?: JSON2SheetOpts;
    write2excelOpts?: WritingOptions;
}
export declare function jsonToSheetXlsx<T = any>({ data, header, filename, json2sheetOpts, write2excelOpts, }: JsonToSheet<T>): void;
