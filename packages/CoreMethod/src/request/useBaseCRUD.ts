import { BaseCRUD } from "./crud";
type Base<T> = {
  _id: string;
  creator?: string;
  lastOperator?: string;
} & T;

type No_IdBase<T> = Exclude<Base<T>, "_id">;

export function useBaseCRUD<S, T>(
  routePath: string,
  axiosInstance?: any,
  filterCondition?: any
) {
  const activityTemplateGroupInstance = new BaseCRUD<S, Base<T>>(
    routePath,
    axiosInstance
  );

  const getList = async (filterCondition?: any) => {
    return await activityTemplateGroupInstance.getList(filterCondition);
  };

  const getMethod = async (row: Base<T>) => {
    const [resData] = await activityTemplateGroupInstance.get(row._id);
    return resData;
  };

  const postMethod = async (sendData: No_IdBase<T>) => {
    await activityTemplateGroupInstance.post(sendData);
    await getList();
  };

  const deleteMethod = async (row: Base<T>) => {
    await activityTemplateGroupInstance.delete(row._id);
    await getList();
  };

  const putMethod = async (sendData: Base<T>) => {
    await activityTemplateGroupInstance.put(sendData._id, sendData);
    await getList();
  };

  return {
    getList,
    getMethod,
    postMethod,
    deleteMethod,
    putMethod,
  };
}
