// _id 实际为string类型，any是为了直接引用server端的_id：mongoose.Types.ObjectId;
// 流程 server端转换_id为string返回，实际查询用mongoose.Types.ObjectId
import axios from "axios";

interface KeyValueDict {
  [key: string]: any;
}

export class BaseCRUD<S, T> {
  private routePath = "";
  private axiosInstance: any = {};

  constructor(routePath: string, axiosInstance?: any) {
    this.routePath = routePath;
    this.axiosInstance = axiosInstance;
  }

  getAxiosInstance() {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: "https://some-domain.com/api/",
        timeout: 3000,
      });
    }
    return this.axiosInstance;
  }

  getList(filterCondition?: KeyValueDict) {
    return this.getAxiosInstance().get(`/${this.routePath}`, {
      params: filterCondition,
    });
  }

  post(sendData: KeyValueDict) {
    return this.getAxiosInstance().post(`/${this.routePath}`, {
      data: sendData,
    });
  }

  delete(_id: any) {
    return this.getAxiosInstance().delete(`/${this.routePath}/${_id}`);
  }

  put(_id: any, sendData: KeyValueDict) {
    return this.getAxiosInstance().put(`/${this.routePath}/${_id}`, {
      data: sendData,
    });
  }

  get(_id: string) {
    return this.getAxiosInstance().get(`/${this.routePath}/${_id}`);
  }
}
