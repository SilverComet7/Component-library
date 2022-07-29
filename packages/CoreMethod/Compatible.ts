import { cloneDeep } from 'lodash';


interface CompatibleWithDefaultConfigParams {
  [key: string]: any;
}

export function CompatibleWithDefaultConfig(defaultConfig: CompatibleWithDefaultConfigParams, listData: Array<any> | CompatibleWithDefaultConfigParams) {
  for (const key in defaultConfig) {
    if (Object.prototype.hasOwnProperty.call(defaultConfig, key)) {
      if (Array.isArray(listData)) {
        listData.forEach(item => {
          const cloneItem = cloneDeep(defaultConfig[key]);
          item[key] = item[key] || cloneItem;
        });
      } else {
        listData[key] = listData[key] || cloneDeep(defaultConfig[key]);
      }
    }
  }
}
