type DeepCopy<T> = {
  [K in keyof T]: T[K] extends (infer U)[]
    ? DeepCopy<U>[]
    : T[K] extends object
    ? DeepCopy<T[K]>
    : T[K];
};

/* eslint-disable */
export const copy = {
  copyObject: <T extends Record<string, any>>(obj: T): DeepCopy<T> => {
    const copiedObj: Record<string, any> = {};

    for (const key in obj) {
      const value = obj[key];

      if (Array.isArray(value) === true) {
        copiedObj[key] = copy.copyArray(value);
        continue;
      }
      if (value && typeof value === 'object') {
        copiedObj[key] = copy.copyObject(value);
        continue;
      }
      copiedObj[key] = value;
    }
    return copiedObj as DeepCopy<T>;
  },
  copyArray: <T>(array: T[]): DeepCopy<T>[] => {
    const copiedArray: any[] = [];

    for (const element of array) {
      if (Array.isArray(element) === true) {
        copiedArray.push(copy.copyArray(element));
        continue;
      }
      if (element && typeof element === 'object') {
        copiedArray.push(copy.copyObject(element));
        continue;
      }

      copiedArray.push(element);
    }

    return copiedArray as DeepCopy<T>[];
  },
};
