interface CompatibleWithDefaultConfigParams {
    [key: string]: any;
}
declare type PartialCompatibleWithDefaultConfigParams = Partial<CompatibleWithDefaultConfigParams>;
export declare function CompatibleWithDefaultConfig(defaultConfig: CompatibleWithDefaultConfigParams, listData?: Array<PartialCompatibleWithDefaultConfigParams> | PartialCompatibleWithDefaultConfigParams): Partial<CompatibleWithDefaultConfigParams> | Partial<CompatibleWithDefaultConfigParams>[];
export {};
