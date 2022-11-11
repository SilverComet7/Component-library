import { filterEmpty } from '@/utils/toolkit/method';

export const searchParam = ref<{ [key: string]: any }>({});
export const searchParamFilterEmpty = computed(() => filterEmpty(searchParam.value));
