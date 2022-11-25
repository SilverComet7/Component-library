"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.jsonToSheetXlsx = void 0;
var xlsx_1 = require("xlsx");
// 分工作簿导出
function jsonToSheetXlsx(_a) {
    var _b;
    var data = _a.data, header = _a.header, _c = _a.filename, filename = _c === void 0 ? new Date() + ".xlsx" : _c, _d = _a.json2sheetOpts, json2sheetOpts = _d === void 0 ? {} : _d, _e = _a.write2excelOpts, write2excelOpts = _e === void 0 ? { bookType: "xlsx" } : _e;
    var arrData = __spreadArray([], data);
    if (header) {
        arrData.unshift(header);
        json2sheetOpts.skipHeader = true;
    }
    var worksheet = xlsx_1.utils.json_to_sheet(arrData, json2sheetOpts);
    var workbook = {
        SheetNames: [filename],
        Sheets: (_b = {},
            _b[filename] = worksheet,
            _b)
    };
    xlsx_1.writeFile(workbook, filename, write2excelOpts);
}
exports.jsonToSheetXlsx = jsonToSheetXlsx;
//  todo 导入解析
