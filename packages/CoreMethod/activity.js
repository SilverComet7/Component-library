import { cloneDeep } from "lodash";

export function CompatibleWithDefaultConfig(rowConfig, listData) {
  for (const key in rowConfig) {
    if (Object.prototype.hasOwnProperty.call(rowConfig, key)) {
      if (Array.isArray(listData)) {
        listData.forEach(item => {
          const cloneItem = cloneDeep(rowConfig[key]);
          item[key] = item[key] || cloneItem;
        });
      } else {
        listData[key] = listData[key] || cloneDeep(rowConfig[key]);
      }
    }
  }
}
