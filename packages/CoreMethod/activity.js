import { cloneDeep } from "lodash";

export function CompatibleWithDefaultConfig(defaultConfig, listData) {
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
