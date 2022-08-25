import { cloneDeep } from "lodash";

interface CompatibleWithDefaultConfigParams {
  [key: string]: any;
}
// todo  {name:'',book:[1,2,3],test:{age:1,ss:{1233}}}
export function CompatibleWithDefaultConfig(
  defaultConfig: CompatibleWithDefaultConfigParams,
  listData: Array<any> | CompatibleWithDefaultConfigParams = {}
) {
  for (const key in defaultConfig) {
    if (Object.prototype.hasOwnProperty.call(defaultConfig, key)) {
      if (Array.isArray(listData)) {
        listData.forEach((item) => {
          const cloneItem = cloneDeep(defaultConfig[key]);
          item[key] = item[key] ?? cloneItem;
        });
      } else {
        listData[key] = listData[key] ?? cloneDeep(defaultConfig[key]);
      }
      // if(typeof  defaultConfig[key] === 'object'){  // {}
      //   CompatibleWithDefaultConfig(defaultConfig[key],listDataData[key])
      // }
    }
  }
  return listData;
}
