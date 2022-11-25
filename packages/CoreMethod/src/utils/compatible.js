"use strict";
exports.__esModule = true;
exports.CompatibleWithDefaultConfig = void 0;
var lodash_1 = require("lodash");
// todo  {name:'',book:[1,2,3],test:{age:1,ss:{1233}}}
function CompatibleWithDefaultConfig(defaultConfig, listData) {
    var _a;
    if (listData === void 0) { listData = {}; }
    var _loop_1 = function (key) {
        if (Object.prototype.hasOwnProperty.call(defaultConfig, key)) {
            if (Array.isArray(listData)) {
                listData.forEach(function (item) {
                    var _a;
                    var cloneItem = lodash_1.cloneDeep(defaultConfig[key]);
                    item[key] = (_a = item[key]) !== null && _a !== void 0 ? _a : cloneItem;
                });
            }
            else {
                listData[key] = (_a = listData[key]) !== null && _a !== void 0 ? _a : lodash_1.cloneDeep(defaultConfig[key]);
            }
            // if(typeof  defaultConfig[key] === 'object'){  // {}
            //   CompatibleWithDefaultConfig(defaultConfig[key],listDataData[key])
            // }
        }
    };
    for (var key in defaultConfig) {
        _loop_1(key);
    }
    return listData;
}
exports.CompatibleWithDefaultConfig = CompatibleWithDefaultConfig;
