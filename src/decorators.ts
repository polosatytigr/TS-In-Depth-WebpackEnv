export function sealed(param: string) {
  return function(target: Function): void {
    console.group('@sealed');
    console.log(`Sealing the constructor "${param}"`);
    console.log(target);
    console.groupEnd();

    Object.seal(target);
    Object.seal(target.prototype);
  }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function(name: string, age: number, dep: string) {
    console.group('@logger');
    console.log('Creating new instance');
    console.log(target);
    console.groupEnd();

    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
  };

  return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
  return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
    console.group('@writable');
    console.log('@writable.target', target);
    console.log('@writable.methodName', methodName);
    console.log('@writable.descriptor', descriptor);
    console.groupEnd();
    descriptor.writable = isWritable;

    return descriptor;
  }
}

export function timeout(ms: number) {
  return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
    console.group('@timeout');
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };
    console.groupEnd();

    return descriptor;
  }
}


export function logParameter(target: Object, methodName: string, parameterIndex: number) {
  const key = `${methodName}_decor_params_indexes`;

  target[key] = target[key] || [];
  target[key].push(parameterIndex);
}

export function logMethod(target: Object, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const key = `${methodName}_decor_params_indexes`;
    const indexes: number[] = target[key];

    // /* v1 */
    // indexes.forEach((paramIndex) => {
    //   console.log(`Method: ${methodName}, ParamIndex: ${paramIndex}, ParamValue: ${args[paramIndex]}`);
    // });

    /* v2 */
    args.forEach((arg, index) => {
      if (indexes.includes(index)) {
        console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
      }
    });

    return originalMethod.apply(this, args);
  };

  return descriptor;
}

function _makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
){
  const values = new Map<any, T>();
  Object.defineProperty(prototype, propertyName, {
    set(firstValue: any) {
      Object.defineProperty(this, propertyName, {
        get() {
          // console.log('>>>>>', this, values);
          if (getTransformer) {
            return getTransformer(values.get(this));
          } else {
            values.get(this);
          }
        },
        set(value: any) {
          if (setTransformer) {
            values.set(this, setTransformer(value));
          } else {
            values.set(this, value);
          }
        },
        enumerable: true
      });
      this[propertyName] = firstValue;
    },
    enumerable: true,
    configurable: true
  });
}

export function format(pref: string = 'Mr./Mrs.') {
  return function (target: Object, propertyName: string) {
    _makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
  }
}

export function positiveInteger (target: Object, propertyName: string, descriptor: PropertyDescriptor) {
  const originalSet = descriptor.set;

  descriptor.set = function (value: number) {
    if (value < 1 || !Number.isInteger(value)) {
      throw new Error('custom Error: Invalid Value');
    }
    originalSet.call(this, value);
  };

  return descriptor;
}


