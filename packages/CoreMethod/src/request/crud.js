"use strict";
exports.__esModule = true;
exports.BaseCRUD = void 0;
// _id 实际为string类型，any是为了直接引用server端的_id：mongoose.Types.ObjectId;
// 流程 server端转换_id为string返回，实际查询用mongoose.Types.ObjectId
var axios_1 = require("axios");
var BaseCRUD = /** @class */ (function () {
    function BaseCRUD(routePath, axiosInstance) {
        this.routePath = "";
        this.axiosInstance = {};
        this.routePath = routePath;
        this.axiosInstance = axiosInstance;
    }
    BaseCRUD.prototype.getAxiosInstance = function () {
        if (!this.axiosInstance) {
            this.axiosInstance = axios_1["default"].create({
                baseURL: "https://some-domain.com/api/",
                timeout: 3000
            });
        }
        return this.axiosInstance;
    };
    BaseCRUD.prototype.getList = function (filterCondition) {
        return this.getAxiosInstance().get("/" + this.routePath, {
            params: filterCondition
        });
    };
    BaseCRUD.prototype.post = function (sendData) {
        return this.getAxiosInstance().post("/" + this.routePath, {
            data: sendData
        });
    };
    BaseCRUD.prototype["delete"] = function (_id) {
        return this.getAxiosInstance()["delete"]("/" + this.routePath + "/" + _id);
    };
    BaseCRUD.prototype.put = function (_id, sendData) {
        return this.getAxiosInstance().put("/" + this.routePath + "/" + _id, {
            data: sendData
        });
    };
    BaseCRUD.prototype.get = function (_id) {
        return this.getAxiosInstance().get("/" + this.routePath + "/" + _id);
    };
    return BaseCRUD;
}());
exports.BaseCRUD = BaseCRUD;
