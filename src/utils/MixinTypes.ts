// https://www.typescriptlang.org/docs/handbook/mixins.html
export type MixinConstructor<T = {}> = new (...args: any[]) => T;
export type MixinFunction<TBase extends MixinConstructor<any>> = (
    input: TBase
) => TBase;
export type Mixin<T extends MixinFunction<any>> = InstanceType<ReturnType<T>>;
