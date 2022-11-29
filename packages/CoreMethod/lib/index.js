exports.__esModule = true;
exports.CompatibleWithDefaultConfig = void 0;
var lodash_1 = require("lodash");
function CompatibleWithDefaultConfig(defaultConfig, listData) {
  var _a;
  if (listData === void 0) {
    listData = {};
  }
  var _loop_1 = function(key2) {
    if (Object.prototype.hasOwnProperty.call(defaultConfig, key2)) {
      if (Array.isArray(listData)) {
        listData.forEach(function(item) {
          var _a2;
          var cloneItem = lodash_1.cloneDeep(defaultConfig[key2]);
          item[key2] = (_a2 = item[key2]) !== null && _a2 !== void 0 ? _a2 : cloneItem;
        });
      } else {
        listData[key2] = (_a = listData[key2]) !== null && _a !== void 0 ? _a : lodash_1.cloneDeep(defaultConfig[key2]);
      }
    }
  };
  for (var key in defaultConfig) {
    _loop_1(key);
  }
  return listData;
}
exports.CompatibleWithDefaultConfig = CompatibleWithDefaultConfig;
function formatOption(rowOrId, column, option, formatWay = "jsx") {
  const rowValue = column ? rowOrId[column.property] : rowOrId;
  if (!option)
    return rowValue;
  const findItem = option.find(
    (item) => item[formatWay === "value" ? "label" : "value"] === rowValue
  );
  if (!findItem)
    throw new Error(`\u914D\u7F6E\u9519\u8BEF${rowValue}`);
  const { color, label, value } = findItem;
  if (formatWay === "jsx") {
    if (color)
      return /* @__PURE__ */ h("h1", {
        style: { color }
      }, label);
    return label;
  }
  if (formatWay === "label") {
    return label;
  }
  if (formatWay === "value") {
    return value;
  }
}
exports.__esModule = true;
exports.BaseCRUD = void 0;
var axios_1 = require("axios");
var BaseCRUD = function() {
  function BaseCRUD2(routePath, axiosInstance) {
    this.routePath = "";
    this.axiosInstance = {};
    this.routePath = routePath;
    this.axiosInstance = axiosInstance;
  }
  BaseCRUD2.prototype.getAxiosInstance = function() {
    if (!this.axiosInstance) {
      this.axiosInstance = axios_1["default"].create({
        baseURL: "https://some-domain.com/api/",
        timeout: 3e3
      });
    }
    return this.axiosInstance;
  };
  BaseCRUD2.prototype.getList = function(filterCondition) {
    return this.getAxiosInstance().get("/" + this.routePath, {
      params: filterCondition
    });
  };
  BaseCRUD2.prototype.post = function(sendData) {
    return this.getAxiosInstance().post("/" + this.routePath, {
      data: sendData
    });
  };
  BaseCRUD2.prototype["delete"] = function(_id) {
    return this.getAxiosInstance()["delete"]("/" + this.routePath + "/" + _id);
  };
  BaseCRUD2.prototype.put = function(_id, sendData) {
    return this.getAxiosInstance().put("/" + this.routePath + "/" + _id, {
      data: sendData
    });
  };
  BaseCRUD2.prototype.get = function(_id) {
    return this.getAxiosInstance().get("/" + this.routePath + "/" + _id);
  };
  return BaseCRUD2;
}();
exports.BaseCRUD = BaseCRUD;
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
exports.__esModule = true;
exports.jsonToSheetXlsx = void 0;
var xlsx_1 = require("xlsx");
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
    Sheets: (_b = {}, _b[filename] = worksheet, _b)
  };
  xlsx_1.writeFile(workbook, filename, write2excelOpts);
}
exports.jsonToSheetXlsx = jsonToSheetXlsx;
export {
  formatOption
};
