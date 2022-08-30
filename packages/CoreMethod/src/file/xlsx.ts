import xlsx from "xlsx";
import type { WorkBook, JSON2SheetOpts, WritingOptions } from 'xlsx';
export interface JsonToSheet<T = any> {
  data: T[];
  header?: T;
  filename?: string;
  json2sheetOpts?: JSON2SheetOpts;
  write2excelOpts?: WritingOptions;
}
const { utils, writeFile } = xlsx;

export function jsonToSheetXlsx<T = any>({
  data,
  header,
  filename = `${new Date()}.xlsx`,
  json2sheetOpts = {},
  write2excelOpts = { bookType: "xlsx" },
}: JsonToSheet<T>) {
  const arrData = [...data];
  if (header) {
    arrData.unshift(header);
    json2sheetOpts.skipHeader = true;
  }
  const worksheet = utils.json_to_sheet(arrData, json2sheetOpts);
  const workbook: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet,
    },
  };
  writeFile(workbook, filename, write2excelOpts);
}
