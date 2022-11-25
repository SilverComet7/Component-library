declare type Base<T> = {
    _id: string;
    creator?: string;
    lastOperator?: string;
} & T;
declare type No_IdBase<T> = Exclude<Base<T>, "_id">;
export declare function useBaseCRUD<S, T>(routePath: string, axiosInstance?: any, filterCondition?: any): {
    getList: (filterCondition?: any) => Promise<any>;
    getMethod: (row: Base<T>) => Promise<any>;
    postMethod: (sendData: No_IdBase<T>) => Promise<void>;
    deleteMethod: (row: Base<T>) => Promise<void>;
    putMethod: (sendData: Base<T>) => Promise<void>;
};
export {};
