interface KeyValueDict {
    [key: string]: any;
}
export declare class BaseCRUD<S, T> {
    private routePath;
    private axiosInstance;
    constructor(routePath: string, axiosInstance?: any);
    getAxiosInstance(): any;
    getList(filterCondition?: KeyValueDict): any;
    post(sendData: KeyValueDict): any;
    delete(_id: any): any;
    put(_id: any, sendData: KeyValueDict): any;
    get(_id: string): any;
}
export {};
