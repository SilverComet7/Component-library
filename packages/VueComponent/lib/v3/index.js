import { cloneDeep } from "lodash";
import * as XLSX from "xlsx";

function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase
    ? (val) => !!map2[val.toLowerCase()]
    : (val) => !!map2[val];
}

function normalizeStyle(value) {
  if (isArray$2(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item)
        ? parseStringStyle(item)
        : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}

const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray$2(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}

const toDisplayString = (val) => {
  return isString(val)
    ? val
    : val == null
    ? ""
    : isArray$2(val) ||
      (isObject$1(val) &&
        (val.toString === objectToString$1 || !isFunction$1(val.toString)))
    ? JSON.stringify(val, replacer, 2)
    : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        },
        {}
      ),
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()],
    };
  } else if (isObject$1(val) && !isArray$2(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ =
  process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
const EMPTY_ARR =
  process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const NOOP = () => {};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$4 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$4.call(val, key);
const isArray$2 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction$1 = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol$1 = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) =>
  isString(key) &&
  key !== "NaN" &&
  key[0] !== "-" &&
  "" + parseInt(key, 10) === key;
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});
const capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
const toHandlerKey = cacheStringFunction((str) =>
  str ? `on${capitalize(str)}` : ``
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value,
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return (
    _globalThis ||
    (_globalThis =
      typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : {})
  );
};

function warn$1(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;

function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

function onScopeDispose(fn) {
  if (process.env.NODE_ENV !== "production") {
    warn$1(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}

const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol(
  process.env.NODE_ENV !== "production" ? "iterate" : ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  process.env.NODE_ENV !== "production" ? "Map key iterate" : ""
);

class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }

  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }

  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}

function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}

let shouldTrack = true;
const trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}

function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = /* @__PURE__ */ new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = createDep()));
    }
    const eventInfo =
      process.env.NODE_ENV !== "production"
        ? { effect: activeEffect, target, type, key }
        : void 0;
    trackEffects(dep, eventInfo);
  }
}

function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (process.env.NODE_ENV !== "production" && activeEffect.onTrack) {
      activeEffect.onTrack(
        Object.assign({ effect: activeEffect }, debuggerEventExtraInfo)
      );
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$2(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$2(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$2(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo =
    process.env.NODE_ENV !== "production"
      ? {
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget,
        }
      : void 0;
  if (deps.length === 1) {
    if (deps[0]) {
      if (process.env.NODE_ENV !== "production") {
        triggerEffects(deps[0], eventInfo);
      } else {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    if (process.env.NODE_ENV !== "production") {
      triggerEffects(createDep(effects), eventInfo);
    } else {
      triggerEffects(createDep(effects));
    }
  }
}

function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray$2(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}

function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (process.env.NODE_ENV !== "production" && effect.onTrigger) {
      effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}

const isNonTrackableKeys = /* @__PURE__ */ makeMap(
  `__proto__,__v_isRef,__isVue`
);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol)
    .filter((key) => key !== "arguments" && key !== "caller")
    .map((key) => Symbol[key])
    .filter(isSymbol$1)
);
const get$1 = /* @__PURE__ */ createGetter();
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();

function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function (...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function (...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (
      key === "__v_raw" &&
      receiver ===
        (isReadonly2
          ? shallow
            ? shallowReadonlyMap
            : readonlyMap
          : shallow
          ? shallowReactiveMap
          : reactiveMap
        ).get(target)
    ) {
      return target;
    }
    const targetIsArray = isArray$2(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}

const set = /* @__PURE__ */ createSetter();

function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow$1(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray$2(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey =
      isArray$2(target) && isIntegerKey(key)
        ? Number(key) < target.length
        : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}

function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}

function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol$1(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}

function ownKeys(target) {
  track(target, "iterate", isArray$2(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

const mutableHandlers = {
  get: get$1,
  set,
  deleteProperty,
  has,
  ownKeys,
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (process.env.NODE_ENV !== "production") {
      warn$1(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  },
  deleteProperty(target, key) {
    if (process.env.NODE_ENV !== "production") {
      warn$1(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  },
};
const shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
  get: shallowReadonlyGet,
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);

function get$1$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}

function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey
    ? target.has(key)
    : target.has(key) || target.has(rawKey);
}

function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}

function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (process.env.NODE_ENV !== "production") {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}

function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (process.env.NODE_ENV !== "production") {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}

function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget =
    process.env.NODE_ENV !== "production"
      ? isMap(target)
        ? new Map(target)
        : new Set(target)
      : void 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}

function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly2, isShallow2) {
  return function (...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair =
      method === "entries" || (method === Symbol.iterator && targetIsMap);
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 &&
      track(
        rawTarget,
        "iterate",
        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
      );
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done
          ? { value, done }
          : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done,
            };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  };
}

function createReadonlyMethod(type) {
  return function (...args) {
    if (process.env.NODE_ENV !== "production") {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : this;
  };
}

function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false),
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true),
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false),
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true),
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      false,
      false
    );
    readonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      false
    );
    shallowInstrumentations2[method] = createIterableMethod(
      method,
      false,
      true
    );
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2,
  ];
}

const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations,
] = /* @__PURE__ */ createInstrumentations();

function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow
    ? isReadonly2
      ? shallowReadonlyInstrumentations
      : shallowInstrumentations
    : isReadonly2
    ? readonlyInstrumentations
    : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target
        ? instrumentations
        : target,
      key,
      receiver
    );
  };
}

const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false),
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false),
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true),
};

function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${
        type === `Map` ? ` as keys` : ``
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}

const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}

function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value)
    ? 0
    : targetTypeMap(toRawType(value));
}

function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}

function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}

function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}

function createReactiveObject(
  target,
  isReadonly2,
  baseHandlers,
  collectionHandlers,
  proxyMap
) {
  if (!isObject$1(target)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}

function isShallow$1(value) {
  return !!(value && value["__v_isShallow"]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}

function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}

const toReactive = (value) => (isObject$1(value) ? reactive(value) : value);
const toReadonly = (value) => (isObject$1(value) ? readonly(value) : value);

function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    if (process.env.NODE_ENV !== "production") {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value",
      });
    } else {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}

function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    if (process.env.NODE_ENV !== "production") {
      triggerEffects(ref2.dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal,
      });
    } else {
      triggerEffects(ref2.dep);
    }
  }
}

function isRef(r) {
  return !!(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value, false);
}

function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}

class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }

  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}

function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}

const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  },
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs)
    ? objectWithRefs
    : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }

  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }

  set value(newVal) {
    this._object[this._key] = newVal;
  }
}

function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}

class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }

  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }

  set value(newValue) {
    this._setter(newValue);
  }
}

function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$1(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter =
      process.env.NODE_ENV !== "production"
        ? () => {
            console.warn("Write operation failed: computed value is readonly");
          }
        : NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(
    getter,
    setter,
    onlyGetter || !setter,
    isSSR
  );
  if (process.env.NODE_ENV !== "production" && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}

const stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace
        .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
        .join("\n"),
      trace,
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(
        `
`,
        ...formatTrace(trace)
      );
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}

function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0,
      });
    }
    const parentInstance =
      currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}

function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(
      ...(i === 0
        ? []
        : [
            `
`,
          ]),
      ...formatTraceEntry(entry)
    );
  });
  return logs;
}

function formatTraceEntry({ vnode, recurseCount }) {
  const postfix =
    recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props
    ? [open, ...formatProps(vnode.props), close]
    : [open + close];
}

function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}

function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    value == null
  ) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$1(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}

const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core",
};

function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$1(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}

function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo =
      process.env.NODE_ENV !== "production" ? ErrorTypeStrings[type] : type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (
            errorCapturedHooks[i](err, exposedInstance, errorInfo) === false
          ) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo,
      ]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode, throwInDev = true) {
  if (process.env.NODE_ENV !== "production") {
    const info = ErrorTypeStrings[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {
    console.error(err);
  }
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;

function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}

function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = (start + end) >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? (start = middle + 1) : (end = middle);
  }
  return start;
}

function queueJob(job) {
  if (
    (!queue.length ||
      !queue.includes(
        job,
        isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
      )) &&
    job !== currentPreFlushParentJob
  ) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function queueCb(cb, activeQueue, pendingQueue, index2) {
  if (!isArray$2(cb)) {
    if (
      !activeQueue ||
      !activeQueue.includes(cb, cb.allowRecurse ? index2 + 1 : index2)
    ) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    if (process.env.NODE_ENV !== "production") {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (
      preFlushIndex = 0;
      preFlushIndex < activePreFlushCbs.length;
      preFlushIndex++
    ) {
      if (
        process.env.NODE_ENV !== "production" &&
        checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])
      ) {
        continue;
      }
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  flushPreFlushCbs();
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (process.env.NODE_ENV !== "production") {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (
      postFlushIndex = 0;
      postFlushIndex < activePostFlushCbs.length;
      postFlushIndex++
    ) {
      if (
        process.env.NODE_ENV !== "production" &&
        checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])
      ) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

const getId = (job) => (job.id == null ? Infinity : job.id);

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  if (process.env.NODE_ENV !== "production") {
    seen = seen || /* @__PURE__ */ new Map();
  }
  flushPreFlushCbs(seen);
  queue.sort((a, b) => getId(a) - getId(b));
  const check =
    process.env.NODE_ENV !== "production"
      ? (job) => checkRecursiveUpdates(seen, job)
      : NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (process.env.NODE_ENV !== "production" && check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (
      queue.length ||
      pendingPreFlushCbs.length ||
      pendingPostFlushCbs.length
    ) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn(
        `Maximum recursive updates exceeded${
          componentName ? ` in component <${componentName}>` : ``
        }. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}

let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
if (process.env.NODE_ENV !== "production") {
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload),
  };
}
const map = /* @__PURE__ */ new Map();

function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set(),
  });
  return true;
}

function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}

function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  const record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      queueJob(instance.parent.update);
      if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
        instance.parent.ceReload(newComp.styles);
      }
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    }
  });
}

function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}

function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}

function emit$1(event, ...args) {}

const devtoolsComponentUpdated =
  /* @__PURE__ */ createDevtoolsComponentHook("component:updated");

function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      component.parent ? component.parent.uid : void 0,
      component
    );
  };
}

let currentRenderingInstance = null;
let currentScopeId = null;

function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = (instance && instance.type.__scopeId) || null;
  return prev;
}

function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    if (process.env.NODE_ENV !== "production" || false) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}

function markAttrsAccessed() {}

const isSuspense = (type) => type.__isSuspense;

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$2(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function provide(key, value) {
  if (!currentInstance) {
    if (process.env.NODE_ENV !== "production") {
      warn(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides =
      currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}

function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides =
      instance.parent == null
        ? instance.vnode.appContext && instance.vnode.appContext.provides
        : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$1(defaultValue)
        ? defaultValue.call(instance.proxy)
        : defaultValue;
    } else if (process.env.NODE_ENV !== "production") {
      warn(`injection "${String(key)}" not found.`);
    }
  } else if (process.env.NODE_ENV !== "production") {
    warn(`inject() can only be used inside setup() or functional components.`);
  }
}

function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}

const INITIAL_WATCHER_VALUE = {};

function watch(source, cb, options) {
  if (process.env.NODE_ENV !== "production" && !isFunction$1(cb)) {
    warn(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}

function doWatch(
  source,
  cb,
  { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ
) {
  if (process.env.NODE_ENV !== "production" && !cb) {
    if (immediate !== void 0) {
      warn(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const warnInvalidSource = (s) => {
    warn(
      `Invalid watch source: `,
      s,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow$1(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray$2(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow$1(s));
    getter = () =>
      source.map((s) => {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction$1(s)) {
          return callWithErrorHandling(s, instance, 2);
        } else {
          process.env.NODE_ENV !== "production" && warnInvalidSource(s);
        }
      });
  } else if (isFunction$1(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    process.env.NODE_ENV !== "production" && warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (
        deep ||
        forceTrigger ||
        (isMultiSource
          ? newValue.some((v, i) => hasChanged(v, oldValue[i]))
          : hasChanged(newValue, oldValue)) ||
        false
      ) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup,
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => queuePreFlushCb(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (process.env.NODE_ENV !== "production") {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect.run.bind(effect),
      instance && instance.suspense
    );
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}

function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source)
    ? source.includes(".")
      ? createPathGetter(publicThis, source)
      : () => publicThis[source]
    : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$1(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}

function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}

function traverse(value, seen) {
  if (!isObject$1(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray$2(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}

function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map(),
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}

const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator,
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children =
        slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        let hasFound = false;
        for (const c of children) {
          if (c.type !== Comment) {
            if (process.env.NODE_ENV !== "production" && hasFound) {
              warn(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            child = c;
            hasFound = true;
            if (!(process.env.NODE_ENV !== "production")) break;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (
        process.env.NODE_ENV !== "production" &&
        mode &&
        mode !== "in-out" &&
        mode !== "out-in" &&
        mode !== "default"
      ) {
        warn(`invalid <transition> mode: ${mode}`);
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance
      );
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (
        oldInnerChild &&
        oldInnerChild.type !== Comment &&
        (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)
      ) {
        const leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  },
};
const BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}

function resolveTransitionHooks(vnode, props, state, instance) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled,
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$2(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (
        leavingVNode &&
        isSameVNodeType(vnode, leavingVNode) &&
        leavingVNode.el._leaveCb
      ) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = (el._enterCb = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      });
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = (el._leaveCb = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      });
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    },
  };
  return hooks;
}

function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode)
    ? vnode.children
      ? vnode.children[0]
      : void 0
    : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key =
      parentKey == null
        ? child.key
        : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}

function defineComponent(options) {
  return isFunction$1(options)
    ? { setup: options, name: options.name }
    : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;

function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook =
      hook.__weh ||
      (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (process.env.NODE_ENV !== "production") {
    const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
    warn(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}

const createHook =
  (lifecycle) =>
  (hook, target = currentInstance) =>
    injectHook(lifecycle, hook, target);
const onMounted = createHook("m");
const onBeforeUnmount = createHook("bum");

function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    process.env.NODE_ENV !== "production" &&
      warn(`withDirectives can only be used inside render functions.`);
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (isFunction$1(dir)) {
      dir = {
        mounted: dir,
        updated: dir,
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers,
    });
  }
  return vnode;
}

const COMPONENTS = "components";

function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

const NULL_DYNAMIC_COMPONENT = Symbol();

function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}

function resolveAsset(
  type,
  name,
  warnMissing = true,
  maybeSelfReference = false
) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (
        selfName &&
        (selfName === name ||
          selfName === camelize(name) ||
          selfName === capitalize(camelize(name)))
      ) {
        return Component;
      }
    }
    const res =
      resolve(instance[type] || Component[type], name) ||
      resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    if (process.env.NODE_ENV !== "production" && warnMissing && !res) {
      const extra =
        type === COMPONENTS
          ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`
          : ``;
      warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else if (process.env.NODE_ENV !== "production") {
    warn(
      `resolve${capitalize(
        type.slice(0, -1)
      )} can only be used in render() or setup().`
    );
  }
}

function resolve(registry, name) {
  return (
    registry &&
    (registry[name] ||
      registry[camelize(name)] ||
      registry[capitalize(camelize(name))])
  );
}

function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray$2(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.fn;
    }
  }
  return slots;
}

function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (
    currentRenderingInstance.isCE ||
    (currentRenderingInstance.parent &&
      isAsyncWrapper(currentRenderingInstance.parent) &&
      currentRenderingInstance.parent.isCE)
  ) {
    return createVNode(
      "slot",
      name === "default" ? null : { name },
      fallback && fallback()
    );
  }
  let slot = slots[name];
  if (process.env.NODE_ENV !== "production" && slot && slot.length > 1) {
    warn(
      `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
    );
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(
    Fragment,
    { key: props.key || `_${name}` },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  })
    ? vnodes
    : null;
}

const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(
  /* @__PURE__ */ Object.create(null),
  {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) =>
      process.env.NODE_ENV !== "production"
        ? shallowReadonly(i.props)
        : i.props,
    $attrs: (i) =>
      process.env.NODE_ENV !== "production"
        ? shallowReadonly(i.attrs)
        : i.attrs,
    $slots: (i) =>
      process.env.NODE_ENV !== "production"
        ? shallowReadonly(i.slots)
        : i.slots,
    $refs: (i) =>
      process.env.NODE_ENV !== "production" ? shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i),
  }
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } =
      instance;
    if (process.env.NODE_ENV !== "production" && key === "__isVue") {
      return true;
    }
    if (
      process.env.NODE_ENV !== "production" &&
      setupState !== EMPTY_OBJ &&
      setupState.__isScriptSetup &&
      hasOwn(setupState, key)
    ) {
      return setupState[key];
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        (normalizedProps = instance.propsOptions[0]) &&
        hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        process.env.NODE_ENV !== "production" && markAttrsAccessed();
      }
      return publicGetter(instance);
    } else if (
      (cssModule = type.__cssModules) &&
      (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      ((globalProperties = appContext.config.globalProperties),
      hasOwn(globalProperties, key))
    ) {
      {
        return globalProperties[key];
      }
    } else if (
      process.env.NODE_ENV !== "production" &&
      currentRenderingInstance &&
      (!isString(key) || key.indexOf("__v") !== 0)
    ) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn(
          `Property ${JSON.stringify(
            key
          )} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          `Attempting to mutate prop "${key}". Props are readonly.`,
          instance
        );
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      process.env.NODE_ENV !== "production" &&
        warn(
          `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`,
          instance
        );
      return false;
    } else {
      if (
        process.env.NODE_ENV !== "production" &&
        key in instance.appContext.config.globalProperties
      ) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value,
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has(
    { _: { data, setupState, accessCache, ctx, appContext, propsOptions } },
    key
  ) {
    let normalizedProps;
    return (
      !!accessCache[key] ||
      (data !== EMPTY_OBJ && hasOwn(data, key)) ||
      (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) ||
      ((normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key)) ||
      hasOwn(ctx, key) ||
      hasOwn(publicPropertiesMap, key) ||
      hasOwn(appContext.config.globalProperties, key)
    );
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  },
};
if (process.env.NODE_ENV !== "production" && true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}

function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies },
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) =>
        mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  cache.set(base, resolved);
  return resolved;
}

function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      process.env.NODE_ENV !== "production" &&
        warn(
          `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
        );
    } else {
      const strat = internalOptionMergeStrats[key] || (strats && strats[key]);
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}

const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject,
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction$1(to) ? to.call(this, this) : to,
      isFunction$1(from) ? from.call(this, this) : from
    );
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if (isArray$2(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}

function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}

function mergeObjectOptions(to, from) {
  return to
    ? extend(extend(/* @__PURE__ */ Object.create(null), to), from)
    : from;
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap(),
  };
}

const queuePostRenderEffect = queueEffectWithSuspense;

function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$2(ch1) && isArray$2(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow) traverseStaticChildren(c1, c2);
      }
      if (
        process.env.NODE_ENV !== "production" &&
        c2.type === Comment &&
        !c2.el
      ) {
        c2.el = c1.el;
      }
    }
  }
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) =>
  props && (props.disabled || props.disabled === "");
const isTargetSVG = (target) =>
  typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      process.env.NODE_ENV !== "production" &&
        warn(
          `Current renderer does not support string target for Teleports. (missing querySelector renderer option)`
        );
      return null;
    } else {
      const target = select(targetSelector);
      if (!target) {
        process.env.NODE_ENV !== "production" &&
          warn(
            `Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
          );
      }
      return target;
    }
  } else {
    if (
      process.env.NODE_ENV !== "production" &&
      !targetSelector &&
      !isTeleportDisabled(props)
    ) {
      warn(`Invalid Teleport target: ${targetSelector}`);
    }
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(
    n1,
    n2,
    container,
    anchor,
    parentComponent,
    parentSuspense,
    isSVG,
    slotScopeIds,
    optimized,
    internals
  ) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment },
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (process.env.NODE_ENV !== "production" && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }
    if (n1 == null) {
      const placeholder = (n2.el =
        process.env.NODE_ENV !== "production"
          ? createComment("teleport start")
          : createText(""));
      const mainAnchor = (n2.anchor =
        process.env.NODE_ENV !== "production"
          ? createComment("teleport end")
          : createText(""));
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = (n2.target = resolveTarget(n2.props, querySelector));
      const targetAnchor = (n2.targetAnchor = createText(""));
      if (target) {
        insert(targetAnchor, target);
        isSVG = isSVG || isTargetSVG(target);
      } else if (process.env.NODE_ENV !== "production" && !disabled) {
        warn("Invalid Teleport target on mount:", target, `(${typeof target})`);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = (n2.anchor = n1.anchor);
      const target = (n2.target = n1.target);
      const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      isSVG = isSVG || isTargetSVG(target);
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = (n2.target = resolveTarget(
            n2.props,
            querySelector
          ));
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          } else if (process.env.NODE_ENV !== "production") {
            warn(
              "Invalid Teleport target on update:",
              target,
              `(${typeof target})`
            );
          }
        } else if (wasDisabled) {
          moveTeleport(n2, target, targetAnchor, internals, 1);
        }
      }
    }
  },
  remove(
    vnode,
    parentComponent,
    parentSuspense,
    optimized,
    { um: unmount, o: { remove: hostRemove } },
    doRemove
  ) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);
      if (shapeFlag & 16) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          unmount(
            child,
            parentComponent,
            parentSuspense,
            true,
            !!child.dynamicChildren
          );
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport,
};

function moveTeleport(
  vnode,
  container,
  parentAnchor,
  { o: { insert }, m: move },
  moveType = 2
) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(
  node,
  vnode,
  parentComponent,
  parentSuspense,
  slotScopeIds,
  optimized,
  { o: { nextSibling, parentNode, querySelector } },
  hydrateChildren
) {
  const target = (vnode.target = resolveTarget(vnode.props, querySelector));
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);
          if (
            targetAnchor &&
            targetAnchor.nodeType === 8 &&
            targetAnchor.data === "teleport anchor"
          ) {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }
        hydrateChildren(
          targetNode,
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}

const Teleport = TeleportImpl;
const Fragment = Symbol(
  process.env.NODE_ENV !== "production" ? "Fragment" : void 0
);
const Text = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0);
const Comment = Symbol(
  process.env.NODE_ENV !== "production" ? "Comment" : void 0
);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
const blockStack = [];
let currentBlock = null;

function openBlock(disableTracking = false) {
  blockStack.push((currentBlock = disableTracking ? null : []));
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}

let isBlockTreeEnabled = 1;

function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}

function setupBlock(vnode) {
  vnode.dynamicChildren =
    isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}

function createElementBlock(
  type,
  props,
  children,
  patchFlag,
  dynamicProps,
  shapeFlag
) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}

function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(type, props, children, patchFlag, dynamicProps, true)
  );
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if (
    process.env.NODE_ENV !== "production" &&
    n2.shapeFlag & 6 &&
    hmrDirtyComponents.has(n2.type)
  ) {
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}

const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(...args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => (key != null ? key : null);
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null
    ? isString(ref2) || isRef(ref2) || isFunction$1(ref2)
      ? {
          i: currentRenderingInstance,
          r: ref2,
          k: ref_key,
          f: !!ref_for,
        }
      : ref2
    : null;
};

function createBaseVNode(
  type,
  props = null,
  children = null,
  patchFlag = 0,
  dynamicProps = null,
  shapeFlag = type === Fragment ? 0 : 1,
  isBlockNode = false,
  needFullChildrenNormalization = false
) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (process.env.NODE_ENV !== "production" && vnode.key !== vnode.key) {
    warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (
    isBlockTreeEnabled > 0 &&
    !isBlockNode &&
    currentBlock &&
    (vnode.patchFlag > 0 || shapeFlag & 6) &&
    vnode.patchFlag !== 32
  ) {
    currentBlock.push(vnode);
  }
  return vnode;
}

const createVNode =
  process.env.NODE_ENV !== "production"
    ? createVNodeWithArgsTransform
    : _createVNode;

function _createVNode(
  type,
  props = null,
  children = null,
  patchFlag = 0,
  dynamicProps = null,
  isBlockNode = false
) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (process.env.NODE_ENV !== "production" && !type) {
      warn(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$1(style)) {
      if (isProxy(style) && !isArray$2(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type)
    ? 1
    : isSuspense(type)
    ? 128
    : isTeleport(type)
    ? 64
    : isObject$1(type)
    ? 4
    : isFunction$1(type)
    ? 2
    : 0;
  if (process.env.NODE_ENV !== "production" && shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn(
      `Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
      `
Component that was made reactive: `,
      type
    );
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}

function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || InternalObjectKey in props
    ? extend({}, props)
    : props;
}

function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref:
      extraProps && extraProps.ref
        ? mergeRef && ref2
          ? isArray$2(ref2)
            ? ref2.concat(normalizeRef(extraProps))
            : [ref2, normalizeRef(extraProps)]
          : normalizeRef(extraProps)
        : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:
      process.env.NODE_ENV !== "production" &&
      patchFlag === -1 &&
      isArray$2(children)
        ? children.map(deepCloneVNode)
        : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag:
      extraProps && vnode.type !== Fragment
        ? patchFlag === -1
          ? 16
          : patchFlag | 16
        : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
  };
  return cloned;
}

function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray$2(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}

function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}

function createCommentVNode(text = "", asBlock = false) {
  return asBlock
    ? (openBlock(), createBlock(Comment, null, text))
    : createVNode(Comment, null, text);
}

function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$2(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$1(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (
          incoming &&
          existing !== incoming &&
          !(isArray$2(existing) && existing.includes(incoming))
        ) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}

createAppContext();
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}

let isInSSRComponentSetup = false;

function createAttrsProxy(instance) {
  return new Proxy(
    instance.attrs,
    process.env.NODE_ENV !== "production"
      ? {
          get(target, key) {
            track(instance, "get", "$attrs");
            return target[key];
          },
          set() {
            warn(`setupContext.attrs is readonly.`);
            return false;
          },
          deleteProperty() {
            warn(`setupContext.attrs is readonly.`);
            return false;
          },
        }
      : {
          get(target, key) {
            track(instance, "get", "$attrs");
            return target[key];
          },
        }
  );
}

function createSetupContext(instance) {
  const expose = (exposed) => {
    if (process.env.NODE_ENV !== "production" && instance.exposed) {
      warn(`expose() should be called only once per setup().`);
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  if (process.env.NODE_ENV !== "production") {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose,
    });
  } else {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose,
    };
  }
}

function getExposeProxy(instance) {
  if (instance.exposed) {
    return (
      instance.exposeProxy ||
      (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
      }))
    );
  }
}

const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) =>
  str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");

function getComponentName(Component, includeInferred = true) {
  return isFunction$1(Component)
    ? Component.displayName || Component.name
    : Component.name || (includeInferred && Component.__name);
}

function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name =
      inferFromRegistry(
        instance.components || instance.parent.type.components
      ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}

function isClassComponent(value) {
  return isFunction$1(value) && "__vccOpts" in value;
}

const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};

function useSlots() {
  return getContext().slots;
}

function getContext() {
  const i = getCurrentInstance();
  if (process.env.NODE_ENV !== "production" && !i) {
    warn(`useContext() called without active instance.`);
  }
  return i.setupContext || (i.setupContext = createSetupContext(i));
}

function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$1(propsOrChildren) && !isArray$2(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}

Symbol(process.env.NODE_ENV !== "production" ? `ssrContext` : ``);

function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}

function initCustomFormatter() {
  if (
    !(process.env.NODE_ENV !== "production") ||
    typeof window === "undefined"
  ) {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#0b1bc9" };
  const stringStyle = { style: "color:#b62e24" };
  const keywordStyle = { style: "color:#9d288c" };
  const formatter = {
    header(obj) {
      if (!isObject$1(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`,
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`,
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">",
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return ["div", {}, ...formatInstance(obj.$)];
      }
    },
  };

  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66",
        },
        "$ (internal): ",
      ],
      ["object", { object: instance }],
    ]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582",
        },
        type,
      ],
      [
        "div",
        {
          style: "padding-left:1.25em",
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false),
          ];
        }),
      ],
    ];
  }

  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject$1(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction$1(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (
      (isArray$2(opts) && opts.includes(key)) ||
      (isObject$1(opts) && key in opts)
    ) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) =>
  h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true,
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Transition.props = /* @__PURE__ */ extend(
  {},
  BaseTransition.props,
  DOMTransitionPropsValidators
);
const callHook = (hook, args = []) => {
  if (isArray$2(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook
    ? isArray$2(hook)
      ? hook.some((h2) => h2.length > 1)
      : hook.length > 1
    : false;
};

function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`,
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled,
  } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    },
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$1(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  const res = toNumber(val);
  if (process.env.NODE_ENV !== "production") validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== "number") {
    warn(
      `<transition> explicit duration is not a valid number - got ${JSON.stringify(
        val
      )}.`
    );
  } else if (isNaN(val)) {
    warn(
      `<transition> explicit duration is NaN - the duration expression might be incorrect.`
    );
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}

let endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = (el._endId = ++endId);
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type =
      timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  const hasTransform =
    type === TRANSITION &&
    /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform,
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}

function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}

function forceReflow() {
  return document.body.offsetHeight;
}

const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) =>
    systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m)),
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  },
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}

function initDev() {
  {
    initCustomFormatter();
  }
}

if (process.env.NODE_ENV !== "production") {
  initDev();
}
var freeGlobal =
  typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf =
  typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var nativeObjectToString$1 = objectProto$4.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;

function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
    tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var objectProto$3 = Object.prototype;
var nativeObjectToString = objectProto$3.toString;

function objectToString(value) {
  return nativeObjectToString.call(value);
}

var nullTag = "[object Null]",
  undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;

function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value)
    ? getRawTag(value)
    : objectToString(value);
}

function isObjectLike(value) {
  return value != null && typeof value == "object";
}

var symbolTag = "[object Symbol]";

function isSymbol(value) {
  return (
    typeof value == "symbol" ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag)
  );
}

function arrayMap(array, iteratee) {
  var index2 = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}

var isArray = Array.isArray;
const isArray$1 = isArray;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0,
  symbolToString = symbolProto ? symbolProto.toString : void 0;

function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}

function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}

var asyncTag = "[object AsyncFunction]",
  funcTag = "[object Function]",
  genTag = "[object GeneratorFunction]",
  proxyTag = "[object Proxy]";

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = (function () {
  var uid = /[^.]+$/.exec(
    (coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO) || ""
  );
  return uid ? "Symbol(src)_1." + uid : "";
})();

function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;

function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return func + "";
    } catch (e) {}
  }
  return "";
}

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype,
  objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp(
  "^" +
    funcToString
      .call(hasOwnProperty$2)
      .replace(reRegExpChar, "\\$&")
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        "$1.*?"
      ) +
    "$"
);

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

function getValue(object, key) {
  return object == null ? void 0 : object[key];
}

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (
    type == "number" ||
    type == "symbol" ||
    type == "boolean" ||
    value == null ||
    isSymbol(value)
  ) {
    return true;
  }
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  );
}

var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;

function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}

function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
}

var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}

var HASH_UNDEFINED = "__lodash_hash_undefined__";

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}

function Hash(entries) {
  var index2 = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}

Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var arrayProto = Array.prototype;
var splice = arrayProto.splice;

function listCacheDelete(key) {
  var data = this.__data__,
    index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}

function listCacheGet(key) {
  var data = this.__data__,
    index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

function listCacheSet(key, value) {
  var data = this.__data__,
    index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}

function ListCache(entries) {
  var index2 = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$2 || ListCache)(),
    string: new Hash(),
  };
}

function isKeyable(value) {
  var type = typeof value;
  return type == "string" ||
    type == "number" ||
    type == "symbol" ||
    type == "boolean"
    ? value !== "__proto__"
    : value === null;
}

function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key)
    ? data[typeof key == "string" ? "string" : "hash"]
    : data.map;
}

function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
  var data = getMapData(this, key),
    size2 = data.size;
  data.set(key, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}

function MapCache(entries) {
  var index2 = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";

function memoize(func, resolver) {
  if (
    typeof func != "function" ||
    (resolver != null && typeof resolver != "function")
  ) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}

var rePropName =
  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(
      quote ? subString.replace(reEscapeChar, "$1") : number || match
    );
  });
  return result;
});
const stringToPath$1 = stringToPath;

function toString(value) {
  return value == null ? "" : baseToString(value);
}

function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}

var INFINITY = 1 / 0;

function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}

function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0,
    length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}

function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}

function fromPairs(pairs) {
  var index2 = -1,
    length = pairs == null ? 0 : pairs.length,
    result = {};
  while (++index2 < length) {
    var pair = pairs[index2];
    result[pair[0]] = pair[1];
  }
  return result;
}

function isNil(value) {
  return value == null;
}

var _a;
const isClient = typeof window !== "undefined";
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
isClient &&
  ((_a = window == null ? void 0 : window.navigator) == null
    ? void 0
    : _a.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);

function useTimeoutFn(cb, interval, options = {}) {
  const { immediate = true } = options;
  const isPending = ref(false);
  let timer = null;

  function clear2() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function stop() {
    isPending.value = false;
    clear2();
  }

  function start(...args) {
    clear2();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }

  if (immediate) {
    isPending.value = true;
    if (isClient) start();
  }
  return {
    isPending,
    start,
    stop,
  };
}

const isUndefined = (val) => val === void 0;

class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}

function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}

function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    const error = isString(scope)
      ? new ElementPlusError(`[${scope}] ${message}`)
      : scope;
    console.warn(error);
  }
}

const SCOPE = "utils/dom/style";
const classNameToArray = (cls = "") =>
  cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls) return false;
  if (cls.includes(" ")) throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim()) return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  var _a2;
  if (!isClient || !element || !styleName) return "";
  let key = camelize(styleName);
  if (key === "float") key = "cssFloat";
  try {
    const style = element.style[key];
    if (style) return style;
    const computed2 =
      (_a2 = document.defaultView) == null
        ? void 0
        : _a2.getComputedStyle(element, "");
    return computed2 ? computed2[key] : "";
  } catch (e) {
    return element.style[key];
  }
};

function addUnit(value, defaultUnit = "px") {
  if (!value) return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
}

let scrollBarWidth;
const getScrollBarWidth = () => {
  var _a2;
  if (!isClient) return 0;
  if (scrollBarWidth !== void 0) return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = "el-scrollbar__wrap";
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a2 = outer.parentNode) == null ? void 0 : _a2.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
/*! Element Plus Icons Vue v2.0.6 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props) target[key] = val;
  return target;
};
var _sfc_main55 = {
    name: "Close",
  },
  _hoisted_155 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
  },
  _hoisted_255 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      fill: "currentColor",
      d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z",
    },
    null,
    -1
  ),
  _hoisted_354 = [_hoisted_255];

function _sfc_render55(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_155, _hoisted_354);
}

var close_default = /* @__PURE__ */ export_helper_default(_sfc_main55, [
  ["render", _sfc_render55],
  ["__file", "close.vue"],
]);
var _sfc_main147 = {
    name: "Loading",
  },
  _hoisted_1147 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
  },
  _hoisted_2147 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      fill: "currentColor",
      d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z",
    },
    null,
    -1
  ),
  _hoisted_3146 = [_hoisted_2147];

function _sfc_render147(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1147, _hoisted_3146);
}

var loading_default = /* @__PURE__ */ export_helper_default(_sfc_main147, [
  ["render", _sfc_render147],
  ["__file", "loading.vue"],
]);
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$1(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject$1(prop) || isEpProp(prop)) return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator =
    values || validator
      ? (val) => {
          let valid = false;
          let allowedValues = [];
          if (values) {
            allowedValues = Array.from(values);
            if (hasOwn(prop, "default")) {
              allowedValues.push(defaultValue);
            }
            valid || (valid = allowedValues.includes(val));
          }
          if (validator) valid || (valid = validator(val));
          if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)]
              .map((value) => JSON.stringify(value))
              .join(", ");
            warn(
              `Invalid prop: validation failed${
                key ? ` for prop "${key}"` : ""
              }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
                val
              )}.`
            );
          }
          return valid;
        }
      : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true,
  };
  if (hasOwn(prop, "default")) epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) =>
  fromPairs(
    Object.entries(props).map(([key, option]) => [key, buildProp(option, key)])
  );
const iconPropType = definePropType([String, Object, Function]);
const CloseComponents = {
  Close: close_default,
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      if (isFunction$1(ref2)) {
        ref2(el);
      } else {
        ref2.value = el;
      }
    });
  };
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End",
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const componentSizes = ["", "default", "small", "large"];
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[(PatchFlags2["TEXT"] = 1)] = "TEXT";
  PatchFlags2[(PatchFlags2["CLASS"] = 2)] = "CLASS";
  PatchFlags2[(PatchFlags2["STYLE"] = 4)] = "STYLE";
  PatchFlags2[(PatchFlags2["PROPS"] = 8)] = "PROPS";
  PatchFlags2[(PatchFlags2["FULL_PROPS"] = 16)] = "FULL_PROPS";
  PatchFlags2[(PatchFlags2["HYDRATE_EVENTS"] = 32)] = "HYDRATE_EVENTS";
  PatchFlags2[(PatchFlags2["STABLE_FRAGMENT"] = 64)] = "STABLE_FRAGMENT";
  PatchFlags2[(PatchFlags2["KEYED_FRAGMENT"] = 128)] = "KEYED_FRAGMENT";
  PatchFlags2[(PatchFlags2["UNKEYED_FRAGMENT"] = 256)] = "UNKEYED_FRAGMENT";
  PatchFlags2[(PatchFlags2["NEED_PATCH"] = 512)] = "NEED_PATCH";
  PatchFlags2[(PatchFlags2["DYNAMIC_SLOTS"] = 1024)] = "DYNAMIC_SLOTS";
  PatchFlags2[(PatchFlags2["HOISTED"] = -1)] = "HOISTED";
  PatchFlags2[(PatchFlags2["BAIL"] = -2)] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const configProviderContextKey = Symbol();
const dialogInjectionKey = Symbol("dialogInjectionKey");
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a2, _b;
    return (_b = ((_a2 = vm.proxy) == null ? void 0 : _a2.$props)[name]) != null
      ? _b
      : void 0;
  });
};
const globalConfig = ref();

function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance()
    ? inject(configProviderContextKey, globalConfig)
    : globalConfig;
  if (key) {
    return computed(() => {
      var _a2, _b;
      return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null
        ? _b
        : defaultValue;
    });
  } else {
    return config;
  }
}

const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false,
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size2 = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalConfig("size");
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem
    ? { size: void 0 }
    : inject(formItemContextKey, void 0);
  return computed(
    () =>
      size2.value ||
      unref(fallback) ||
      (formItem == null ? void 0 : formItem.size) ||
      (form == null ? void 0 : form.size) ||
      globalConfig2.value ||
      ""
  );
};
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(
    () =>
      disabled.value ||
      unref(fallback) ||
      (form == null ? void 0 : form.disabled) ||
      false
  );
};
const useDeprecated = (
  { from, replacement, scope, version, ref: ref2, type = "API" },
  condition
) => {
  watch(
    () => unref(condition),
    (val) => {
      if (val) {
        debugWarn(
          scope,
          `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref2}
`
        );
      }
    },
    {
      immediate: true,
    }
  );
};
const useDraggable = (targetRef, dragRef, draggable) => {
  let transform = {
    offsetX: 0,
    offsetY: 0,
  };
  const onMousedown = (e) => {
    const downX = e.clientX;
    const downY = e.clientY;
    const { offsetX, offsetY } = transform;
    const targetRect = targetRef.value.getBoundingClientRect();
    const targetLeft = targetRect.left;
    const targetTop = targetRect.top;
    const targetWidth = targetRect.width;
    const targetHeight = targetRect.height;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const minLeft = -targetLeft + offsetX;
    const minTop = -targetTop + offsetY;
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
    const maxTop = clientHeight - targetTop - targetHeight + offsetY;
    const onMousemove = (e2) => {
      const moveX = Math.min(
        Math.max(offsetX + e2.clientX - downX, minLeft),
        maxLeft
      );
      const moveY = Math.min(
        Math.max(offsetY + e2.clientY - downY, minTop),
        maxTop
      );
      transform = {
        offsetX: moveX,
        offsetY: moveY,
      };
      targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(
        moveY
      )})`;
    };
    const onMouseup = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener("mousedown", onMousedown);
    }
  };
  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener("mousedown", onMousedown);
    }
  };
  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable();
      } else {
        offDraggable();
      }
    });
  });
  onBeforeUnmount(() => {
    offDraggable();
  });
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0,
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection);
  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn(
      "IdInjection",
      `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`
    );
  }
  const idRef = computed(
    () =>
      unref(deterministicId) ||
      `el-id-${idInjection.prefix}-${idInjection.current++}`
  );
  return idRef;
};
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem,
  };
};
var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description:
        "current color is {color}. press enter to select a new color.",
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt:
        "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday",
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec",
      },
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number",
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select",
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown",
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data",
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning:
        "Deprecated usages detected, please refer to the el-pagination documentation for more details",
    },
    dialog: {
      close: "Close this dialog",
    },
    drawer: {
      close: "Close this dialog",
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog",
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue",
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value",
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum",
    },
    tree: {
      emptyText: "No Data",
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked",
    },
    image: {
      error: "FAILED",
    },
    pageHeader: {
      title: "Back",
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    },
  },
};
const buildTranslator = (locale) => (path, option) =>
  translate(path, option, unref(locale));
const translate = (path, option, locale) =>
  get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
    var _a2;
    return `${
      (_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`
    }`;
  });
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale),
  };
};
const useLocale = () => {
  const locale = useGlobalConfig("locale");
  return buildLocaleContext(computed(() => locale.value || English));
};
const useLockscreen = (trigger2) => {
  if (!isRef(trigger2)) {
    throwError(
      "[useLockscreen]",
      "You need to pass a ref param to this function"
    );
  }
  if (!isClient || hasClass(document.body, "el-popup-parent--hidden")) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  let bodyPaddingRight = "0";
  let computedBodyPaddingRight = 0;
  const cleanup = () => {
    removeClass(document.body, "el-popup-parent--hidden");
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight;
    }
  };
  watch(trigger2, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass(document.body, "el-popup-parent--hidden");
    if (withoutHiddenClass) {
      bodyPaddingRight = document.body.style.paddingRight;
      computedBodyPaddingRight = Number.parseInt(
        getStyle(document.body, "paddingRight"),
        10
      );
    }
    scrollBarWidth2 = getScrollBarWidth();
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, "overflowY");
    if (
      scrollBarWidth2 > 0 &&
      (bodyHasOverflow || bodyOverflowY === "scroll") &&
      withoutHiddenClass
    ) {
      document.body.style.paddingRight = `${
        computedBodyPaddingRight + scrollBarWidth2
      }px`;
    }
    addClass(document.body, "el-popup-parent--hidden");
  });
  onScopeDispose();
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
let registeredEscapeHandlers = [];
const useEscapeKeydown = (handler) => {
  const cachedHandler = (e) => {
    const event = e;
    if (event.key === EVENT_CODE.esc) {
      registeredEscapeHandlers.forEach((registeredHandler) =>
        registeredHandler(event)
      );
    }
  };
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (isClient) registeredEscapeHandlers.push(handler);
  });
  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter(
      (registeredHandler) => registeredHandler !== handler
    );
    if (registeredEscapeHandlers.length === 0) {
      if (isClient) document.removeEventListener("keydown", cachedHandler);
    }
  });
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig2 = useGlobalConfig("namespace");
  const namespace = computed(() => globalConfig2.value || defaultNamespace);
  const b = (blockSuffix = "") =>
    _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) =>
    element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier) =>
    modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) =>
    blockSuffix && element
      ? _bem(unref(namespace), block, blockSuffix, element, "")
      : "";
  const em = (element, modifier) =>
    element && modifier
      ? _bem(unref(namespace), block, "", element, modifier)
      : "";
  const bm = (blockSuffix, modifier) =>
    blockSuffix && modifier
      ? _bem(unref(namespace), block, blockSuffix, "", modifier)
      : "";
  const bem = (blockSuffix, element, modifier) =>
    blockSuffix && element && modifier
      ? _bem(unref(namespace), block, blockSuffix, element, modifier)
      : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      styles[`--${namespace.value}-${key}`] = object[key];
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      styles[`--${namespace.value}-${block}-${key}`] = object[key];
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
  };
};
const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  };
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String]),
  },
  color: {
    type: String,
  },
});
const __default__$4 = {
  name: "ElIcon",
  inheritAttrs: false,
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color) return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color,
      };
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "i",
          mergeProps(
            {
              class: unref(ns).b(),
              style: unref(style),
            },
            _ctx.$attrs
          ),
          [renderSlot(_ctx.$slots, "default")],
          16
        )
      );
    };
  },
});
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue",
  ],
]);
const ElIcon = withInstall(Icon);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP;
    },
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container)) return element;
  }
};
const isHidden = (element, container) => {
  if (process.env.NODE_ENV === "test") return false;
  if (getComputedStyle(element).visibility === "hidden") return true;
  while (element) {
    if (container && element === container) return false;
    if (getComputedStyle(element).display === "none") return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (
      element !== prevFocusedElement &&
      isSelectable(element) &&
      shouldSelect
    ) {
      element.select();
    }
  }
};

function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}

const createFocusableStack = () => {
  let stack2 = [];
  const push = (layer) => {
    const currentLayer = stack2[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack2 = removeFromStack(stack2, layer);
    stack2.unshift(layer);
  };
  const remove2 = (layer) => {
    var _a2, _b;
    stack2 = removeFromStack(stack2, layer);
    (_b = (_a2 = stack2[0]) == null ? void 0 : _a2.resume) == null
      ? void 0
      : _b.call(_a2);
  };
  return {
    push,
    remove: remove2,
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement) return;
  }
};
const focusableStack = createFocusableStack();
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false,
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const _sfc_main$6 = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first",
    },
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested",
  ],
  setup(props, { emit: emit2 }) {
    const forwardRef = ref();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit2("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      },
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped) return;
      if (focusLayer.paused) return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing =
        key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            e.preventDefault();
            emit2("focusout-prevented");
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault();
            if (loop) tryFocus(first, true);
            emit2("focusout-prevented");
          } else if (
            shiftKey &&
            [first, container].includes(currentFocusingEl)
          ) {
            e.preventDefault();
            if (loop) tryFocus(last, true);
            emit2("focusout-prevented");
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown,
    });
    watch(
      () => props.focusTrapEl,
      (focusTrapEl) => {
        if (focusTrapEl) {
          forwardRef.value = focusTrapEl;
        }
      },
      { immediate: true }
    );
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e) => {
      emit2(ON_TRAP_FOCUS_EVT, e);
    };
    const releaseOnFocus = (e) => emit2(ON_RELEASE_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer) return;
      const target = e.target;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (isFocusedInTrap) emit2("focusin", e);
      if (focusLayer.paused) return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer) return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              tryFocus(lastFocusAfterTrapped, true);
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap) emit2("focusout", e);
      }
    };

    async function startTrap() {
      await nextTick();
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(
            FOCUS_AFTER_TRAPPED,
            FOCUS_AFTER_TRAPPED_OPTS
          );
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            nextTick(() => {
              let focusStartEl = props.focusStartEl;
              if (!isString(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(
                  obtainAllFocusableElements(trapContainer),
                  true
                );
              }
              if (
                document.activeElement === prevFocusedElement ||
                focusStartEl === "container"
              ) {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }

    function stopTrap() {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new Event(
          FOCUS_AFTER_RELEASED,
          FOCUS_AFTER_TRAPPED_OPTS
        );
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented) {
          tryFocus(
            lastFocusBeforeTrapped != null
              ? lastFocusBeforeTrapped
              : document.body,
            true
          );
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, trapOnFocus);
        focusableStack.remove(focusLayer);
      }
    }

    onMounted(() => {
      if (props.trapped) {
        startTrap();
      }
      watch(
        () => props.trapped,
        (trapped) => {
          if (trapped) {
            startTrap();
          } else {
            stopTrap();
          }
        }
      );
    });
    onBeforeUnmount(() => {
      if (props.trapped) {
        stopTrap();
      }
    });
    return {
      onKeydown,
    };
  },
});

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}

var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [
  ["render", _sfc_render$2],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue",
  ],
]);
const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  "",
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: "",
  },
  icon: {
    type: iconPropType,
    default: "",
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button",
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => loading_default,
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0,
  },
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent,
};

function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
  } else {
    n = (n % max) / parseFloat(String(max));
  }
  return n;
}

function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}

function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}

function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}

function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}

function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}

function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}

function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255,
  };
}

function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l };
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h2, s, l) {
  var r;
  var g;
  var b;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h2 + 1 / 3);
    g = hue2rgb(p, q, h2);
    b = hue2rgb(p, q, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}

function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v };
}

function hsvToRgb(h2, s, v) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h2);
  var f = h2 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}

function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
  ];
  if (
    allow3Char &&
    hex[0].startsWith(hex[0].charAt(1)) &&
    hex[1].startsWith(hex[1].charAt(1)) &&
    hex[2].startsWith(hex[2].charAt(1))
  ) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}

function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
    pad2(convertDecimalToHex(a)),
  ];
  if (
    allow4Char &&
    hex[0].startsWith(hex[0].charAt(1)) &&
    hex[1].startsWith(hex[1].charAt(1)) &&
    hex[2].startsWith(hex[2].charAt(1)) &&
    hex[3].startsWith(hex[3].charAt(1))
  ) {
    return (
      hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0)
    );
  }
  return hex.join("");
}

function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}

function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}

function parseIntFromHex(val) {
  return parseInt(val, 16);
}

function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255,
  };
}

var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};

function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (
      isValidCSSUnit(color.r) &&
      isValidCSSUnit(color.g) &&
      isValidCSSUnit(color.b)
    ) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.v)
    ) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.l)
    ) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a,
  };
}

var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+("
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+("
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};

function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8",
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex",
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8",
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex",
    };
  }
  return false;
}

function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var TinyColor = (function () {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a2;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format =
      (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }

  TinyColor2.prototype.isDark = function () {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function () {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function () {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function () {
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  TinyColor2.prototype.getAlpha = function () {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function (alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function () {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function () {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1
      ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v, "%)")
      : "hsva("
          .concat(h2, ", ")
          .concat(s, "%, ")
          .concat(v, "%, ")
          .concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function () {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function () {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1
      ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l, "%)")
      : "hsla("
          .concat(h2, ", ")
          .concat(s, "%, ")
          .concat(l, "%, ")
          .concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a,
    };
  };
  TinyColor2.prototype.toRgbString = function () {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1
      ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")")
      : "rgba("
          .concat(r, ", ")
          .concat(g, ", ")
          .concat(b, ", ")
          .concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function () {
    var fmt = function (x) {
      return "".concat(Math.round(bound01(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a,
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function () {
    var rnd = function (x) {
      return Math.round(bound01(x, 255) * 100);
    };
    return this.a === 1
      ? "rgb("
          .concat(rnd(this.r), "%, ")
          .concat(rnd(this.g), "%, ")
          .concat(rnd(this.b), "%)")
      : "rgba("
          .concat(rnd(this.r), "%, ")
          .concat(rnd(this.g), "%, ")
          .concat(rnd(this.b), "%, ")
          .concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function () {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
      var _b = _a2[_i],
        key = _b[0],
        value = _b[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function (format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat =
      !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function () {
    return (
      (Math.round(this.r) << 16) +
      (Math.round(this.g) << 8) +
      Math.round(this.b)
    );
  };
  TinyColor2.prototype.clone = function () {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(
      0,
      Math.min(255, rgb.r - Math.round(255 * -(amount / 100)))
    );
    rgb.g = Math.max(
      0,
      Math.min(255, rgb.g - Math.round(255 * -(amount / 100)))
    );
    rgb.b = Math.max(
      0,
      Math.min(255, rgb.b - Math.round(255 * -(amount / 100)))
    );
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function () {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function (amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function (color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a,
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function (results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function () {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function (results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s, v }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function () {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l }),
    ];
  };
  TinyColor2.prototype.onBackground = function (background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a,
    });
  };
  TinyColor2.prototype.triad = function () {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function () {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function (n) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(
        new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l })
      );
    }
    return result;
  };
  TinyColor2.prototype.equals = function (color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
})();

function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}

function useButtonCustomStyle(props) {
  const _disabled = useDisabled();
  const ns = useNamespace("button");
  return computed(() => {
    let styles = {};
    const buttonColor = props.color;
    if (buttonColor) {
      const color = new TinyColor(buttonColor);
      const activeBgColor = props.dark
        ? color.tint(20).toString()
        : darken(color, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark
            ? darken(color, 90)
            : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark
            ? darken(color, 50)
            : color.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor,
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark
            ? darken(color, 90)
            : color.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark
            ? darken(color, 50)
            : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark
            ? darken(color, 80)
            : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark
          ? darken(color, 30)
          : color.tint(30).toString();
        const textColor = color.isDark()
          ? `var(${ns.cssVarName("color-white")})`
          : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor,
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark
            ? darken(color, 50)
            : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark
            ? "rgba(255, 255, 255, 0.5)"
            : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] =
            disabledButtonColor;
        }
      }
    }
    return styles;
  });
}

const _hoisted_1$4 = ["aria-disabled", "disabled", "autofocus", "type"];
const __default__$3 = {
  name: "ElButton",
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit: emit2 }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated(
      {
        from: "type.text",
        replacement: "type.link",
        version: "3.0.0",
        scope: "props",
        ref: "https://element-plus.org/en-US/component/button.html#button-attributes",
      },
      computed(() => props.type === "text")
    );
    const buttonGroupContext = inject(buttonGroupContextKey, void 0);
    const globalConfig2 = useGlobalConfig("button");
    const ns = useNamespace("button");
    const { form } = useFormItem();
    const _size = useSize(
      computed(() =>
        buttonGroupContext == null ? void 0 : buttonGroupContext.size
      )
    );
    const _disabled = useDisabled();
    const _ref = ref();
    const _type = computed(
      () =>
        props.type ||
        (buttonGroupContext == null ? void 0 : buttonGroupContext.type) ||
        ""
    );
    const autoInsertSpace = computed(() => {
      var _a2, _b, _c;
      return (_c =
        (_b = props.autoInsertSpace) != null
          ? _b
          : (_a2 = globalConfig2.value) == null
          ? void 0
          : _a2.autoInsertSpace) != null
        ? _c
        : false;
    });
    const shouldAddSpace = computed(() => {
      var _a2;
      const defaultSlot =
        (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      if (
        autoInsertSpace.value &&
        (defaultSlot == null ? void 0 : defaultSlot.length) === 1
      ) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
      }
      return false;
    });
    const buttonStyle = useButtonCustomStyle(props);
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit2("click", evt);
    };
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace,
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "button",
          {
            ref_key: "_ref",
            ref: _ref,
            class: normalizeClass([
              unref(ns).b(),
              unref(ns).m(unref(_type)),
              unref(ns).m(unref(_size)),
              unref(ns).is("disabled", unref(_disabled)),
              unref(ns).is("loading", _ctx.loading),
              unref(ns).is("plain", _ctx.plain),
              unref(ns).is("round", _ctx.round),
              unref(ns).is("circle", _ctx.circle),
              unref(ns).is("text", _ctx.text),
              unref(ns).is("link", _ctx.link),
              unref(ns).is("has-bg", _ctx.bg),
            ]),
            "aria-disabled": unref(_disabled) || _ctx.loading,
            disabled: unref(_disabled) || _ctx.loading,
            autofocus: _ctx.autofocus,
            type: _ctx.nativeType,
            style: normalizeStyle(unref(buttonStyle)),
            onClick: handleClick,
          },
          [
            _ctx.loading
              ? (openBlock(),
                createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    _ctx.$slots.loading
                      ? renderSlot(_ctx.$slots, "loading", { key: 0 })
                      : (openBlock(),
                        createBlock(
                          unref(ElIcon),
                          {
                            key: 1,
                            class: normalizeClass(unref(ns).is("loading")),
                          },
                          {
                            default: withCtx(() => [
                              (openBlock(),
                              createBlock(
                                resolveDynamicComponent(_ctx.loadingIcon)
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class"]
                        )),
                  ],
                  64
                ))
              : _ctx.icon || _ctx.$slots.icon
              ? (openBlock(),
                createBlock(
                  unref(ElIcon),
                  { key: 1 },
                  {
                    default: withCtx(() => [
                      _ctx.icon
                        ? (openBlock(),
                          createBlock(resolveDynamicComponent(_ctx.icon), {
                            key: 0,
                          }))
                        : renderSlot(_ctx.$slots, "icon", { key: 1 }),
                    ]),
                    _: 3,
                  }
                ))
              : createCommentVNode("v-if", true),
            _ctx.$slots.default
              ? (openBlock(),
                createElementBlock(
                  "span",
                  {
                    key: 2,
                    class: normalizeClass({
                      [unref(ns).em("text", "expand")]: unref(shouldAddSpace),
                    }),
                  },
                  [renderSlot(_ctx.$slots, "default")],
                  2
                ))
              : createCommentVNode("v-if", true),
          ],
          14,
          _hoisted_1$4
        )
      );
    };
  },
});
var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue",
  ],
]);
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type,
};
const __default__$2 = {
  name: "ElButtonGroup",
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(
      buttonGroupContextKey,
      reactive({
        size: toRef(props, "size"),
        type: toRef(props, "type"),
      })
    );
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(`${unref(ns).b("group")}`),
          },
          [renderSlot(_ctx.$slots, "default")],
          2
        )
      );
    };
  },
});
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue",
  ],
]);
const ElButton = withInstall(Button, {
  ButtonGroup,
});
withNoopInstall(ButtonGroup);
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true,
  },
  customMaskEvent: {
    type: Boolean,
    default: false,
  },
  overlayClass: {
    type: definePropType([String, Array, Object]),
  },
  zIndex: {
    type: definePropType([String, Number]),
  },
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent,
};
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit: emit2 }) {
    const ns = useNamespace("overlay");
    const onMaskClick = (e) => {
      emit2("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(
      props.customMaskEvent ? void 0 : onMaskClick
    );
    return () => {
      return props.mask
        ? createVNode(
            "div",
            {
              class: [ns.b(), props.overlayClass],
              style: {
                zIndex: props.zIndex,
              },
              onClick,
              onMousedown,
              onMouseup,
            },
            [renderSlot(slots, "default")],
            PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
            ["onClick", "onMouseup", "onMousedown"]
          )
        : h(
            "div",
            {
              class: props.overlayClass,
              style: {
                zIndex: props.zIndex,
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
            [renderSlot(slots, "default")]
          );
    };
  },
});
const ElOverlay = Overlay;
const dialogContentProps = buildProps({
  center: {
    type: Boolean,
    default: false,
  },
  closeIcon: {
    type: iconPropType,
    default: "",
  },
  customClass: {
    type: String,
    default: "",
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
});
const dialogContentEmits = {
  close: () => true,
};
const _hoisted_1$3 = ["aria-label"];
const _hoisted_2$1 = ["id"];
const __default__$1 = { name: "ElDialogContent" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style } =
      inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => props.draggable);
    useDraggable(dialogRef, headerRef, draggable);
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            ref: unref(composedDialogRef),
            class: normalizeClass([
              unref(ns).b(),
              unref(ns).is("fullscreen", _ctx.fullscreen),
              unref(ns).is("draggable", unref(draggable)),
              { [unref(ns).m("center")]: _ctx.center },
              _ctx.customClass,
            ]),
            style: normalizeStyle(unref(style)),
            tabindex: "-1",
            onClick:
              _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
          },
          [
            createBaseVNode(
              "header",
              {
                ref_key: "headerRef",
                ref: headerRef,
                class: normalizeClass(unref(ns).e("header")),
              },
              [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createBaseVNode(
                    "span",
                    {
                      role: "heading",
                      class: normalizeClass(unref(ns).e("title")),
                    },
                    toDisplayString(_ctx.title),
                    3
                  ),
                ]),
                _ctx.showClose
                  ? (openBlock(),
                    createElementBlock(
                      "button",
                      {
                        key: 0,
                        "aria-label": unref(t)("el.dialog.close"),
                        class: normalizeClass(unref(ns).e("headerbtn")),
                        type: "button",
                        onClick:
                          _cache[0] ||
                          (_cache[0] = ($event) => _ctx.$emit("close")),
                      },
                      [
                        createVNode(
                          unref(ElIcon),
                          {
                            class: normalizeClass(unref(ns).e("close")),
                          },
                          {
                            default: withCtx(() => [
                              (openBlock(),
                              createBlock(
                                resolveDynamicComponent(
                                  _ctx.closeIcon || unref(Close)
                                )
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class"]
                        ),
                      ],
                      10,
                      _hoisted_1$3
                    ))
                  : createCommentVNode("v-if", true),
              ],
              2
            ),
            createBaseVNode(
              "div",
              {
                id: unref(bodyId),
                class: normalizeClass(unref(ns).e("body")),
              },
              [renderSlot(_ctx.$slots, "default")],
              10,
              _hoisted_2$1
            ),
            _ctx.$slots.footer
              ? (openBlock(),
                createElementBlock(
                  "footer",
                  {
                    key: 0,
                    class: normalizeClass(unref(ns).e("footer")),
                  },
                  [renderSlot(_ctx.$slots, "footer")],
                  2
                ))
              : createCommentVNode("v-if", true),
          ],
          6
        )
      );
    };
  },
});
var ElDialogContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue",
  ],
]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false,
  },
  beforeClose: {
    type: definePropType(Function),
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  top: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  modalClass: String,
  width: {
    type: [String, Number],
  },
  zIndex: {
    type: Number,
  },
  trapFocus: {
    type: Boolean,
    default: false,
  },
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true,
};
const useDialog = (props, targetRef) => {
  const instance = getCurrentInstance();
  const emit2 = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex2 = ref(props.zIndex || nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });

  function afterEnter() {
    emit2("opened");
  }

  function afterLeave() {
    emit2("closed");
    emit2(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }

  function beforeLeave() {
    emit2("close");
  }

  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }

  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }

  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel) return;
      closed.value = true;
      visible.value = false;
    }

    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }

  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }

  function doOpen() {
    if (!isClient) return;
    visible.value = true;
  }

  function doClose() {
    visible.value = false;
  }

  function onOpenAutoFocus() {
    emit2("openAutoFocus");
  }

  function onCloseAutoFocus() {
    emit2("closeAutoFocus");
  }

  if (props.lockScroll) {
    useLockscreen(visible);
  }

  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
        open();
        rendered.value = true;
        emit2("open");
        zIndex2.value = props.zIndex ? zIndex2.value++ : nextZIndex();
        nextTick(() => {
          if (targetRef.value) {
            targetRef.value.scrollTop = 0;
          }
        });
      } else {
        if (visible.value) {
          close();
        }
      }
    }
  );
  watch(
    () => props.fullscreen,
    (val) => {
      if (!targetRef.value) return;
      if (val) {
        lastPosition = targetRef.value.style.transform;
        targetRef.value.style.transform = "";
      } else {
        targetRef.value.style.transform = lastPosition;
      }
    }
  );
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    titleId,
    bodyId,
    closed,
    style,
    rendered,
    visible,
    zIndex: zIndex2,
  };
};
const _hoisted_1$2 = ["aria-label", "aria-labelledby", "aria-describedby"];
const __default__ = {
  name: "ElDialog",
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated(
      {
        scope: "el-dialog",
        from: "the title slot",
        replacement: "the header slot",
        version: "3.0.0",
        ref: "https://element-plus.org/en-US/component/dialog.html#slots",
      },
      computed(() => !!slots.title)
    );
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      rendered,
      zIndex: zIndex2,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style,
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    expose({
      visible,
      dialogContentRef,
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createBlock(
          Teleport,
          {
            to: "body",
            disabled: !_ctx.appendToBody,
          },
          [
            createVNode(
              Transition,
              {
                name: "dialog-fade",
                onAfterEnter: unref(afterEnter),
                onAfterLeave: unref(afterLeave),
                onBeforeLeave: unref(beforeLeave),
                persisted: "",
              },
              {
                default: withCtx(() => [
                  withDirectives(
                    createVNode(
                      unref(ElOverlay),
                      {
                        "custom-mask-event": "",
                        mask: _ctx.modal,
                        "overlay-class": _ctx.modalClass,
                        "z-index": unref(zIndex2),
                      },
                      {
                        default: withCtx(() => [
                          createBaseVNode(
                            "div",
                            {
                              role: "dialog",
                              "aria-modal": "true",
                              "aria-label": _ctx.title || void 0,
                              "aria-labelledby": !_ctx.title
                                ? unref(titleId)
                                : void 0,
                              "aria-describedby": unref(bodyId),
                              class: normalizeClass(
                                `${unref(ns).namespace.value}-overlay-dialog`
                              ),
                              onClick:
                                _cache[0] ||
                                (_cache[0] = (...args) =>
                                  unref(overlayEvent).onClick &&
                                  unref(overlayEvent).onClick(...args)),
                              onMousedown:
                                _cache[1] ||
                                (_cache[1] = (...args) =>
                                  unref(overlayEvent).onMousedown &&
                                  unref(overlayEvent).onMousedown(...args)),
                              onMouseup:
                                _cache[2] ||
                                (_cache[2] = (...args) =>
                                  unref(overlayEvent).onMouseup &&
                                  unref(overlayEvent).onMouseup(...args)),
                            },
                            [
                              createVNode(
                                unref(ElFocusTrap),
                                {
                                  loop: "",
                                  trapped: unref(visible),
                                  "focus-start-el": "container",
                                  onFocusAfterTrapped: unref(onOpenAutoFocus),
                                  onFocusAfterReleased: unref(onCloseAutoFocus),
                                  onReleaseRequested: unref(onCloseRequested),
                                },
                                {
                                  default: withCtx(() => [
                                    unref(rendered)
                                      ? (openBlock(),
                                        createBlock(
                                          ElDialogContent,
                                          {
                                            key: 0,
                                            ref_key: "dialogContentRef",
                                            ref: dialogContentRef,
                                            "custom-class": _ctx.customClass,
                                            center: _ctx.center,
                                            "close-icon": _ctx.closeIcon,
                                            draggable: unref(draggable),
                                            fullscreen: _ctx.fullscreen,
                                            "show-close": _ctx.showClose,
                                            title: _ctx.title,
                                            onClose: unref(handleClose),
                                          },
                                          createSlots(
                                            {
                                              header: withCtx(() => [
                                                !_ctx.$slots.title
                                                  ? renderSlot(
                                                      _ctx.$slots,
                                                      "header",
                                                      {
                                                        key: 0,
                                                        close:
                                                          unref(handleClose),
                                                        titleId: unref(titleId),
                                                        titleClass:
                                                          unref(ns).e("title"),
                                                      }
                                                    )
                                                  : renderSlot(
                                                      _ctx.$slots,
                                                      "title",
                                                      { key: 1 }
                                                    ),
                                              ]),
                                              default: withCtx(() => [
                                                renderSlot(
                                                  _ctx.$slots,
                                                  "default"
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            [
                                              _ctx.$slots.footer
                                                ? {
                                                    name: "footer",
                                                    fn: withCtx(() => [
                                                      renderSlot(
                                                        _ctx.$slots,
                                                        "footer"
                                                      ),
                                                    ]),
                                                  }
                                                : void 0,
                                            ]
                                          ),
                                          1032,
                                          [
                                            "custom-class",
                                            "center",
                                            "close-icon",
                                            "draggable",
                                            "fullscreen",
                                            "show-close",
                                            "title",
                                            "onClose",
                                          ]
                                        ))
                                      : createCommentVNode("v-if", true),
                                  ]),
                                  _: 3,
                                },
                                8,
                                [
                                  "trapped",
                                  "onFocusAfterTrapped",
                                  "onFocusAfterReleased",
                                  "onReleaseRequested",
                                ]
                              ),
                            ],
                            42,
                            _hoisted_1$2
                          ),
                        ]),
                        _: 3,
                      },
                      8,
                      ["mask", "overlay-class", "z-index"]
                    ),
                    [[vShow, unref(visible)]]
                  ),
                ]),
                _: 3,
              },
              8,
              ["onAfterEnter", "onAfterLeave", "onBeforeLeave"]
            ),
          ],
          8,
          ["disabled"]
        )
      );
    };
  },
});
var Dialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue",
  ],
]);
const ElDialog = withInstall(Dialog);
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  components: { ElButton, ElDialog },
  props: {
    buttonName: { type: String, default: "\u521B\u5EFA" },
    content: { type: Array, default: [] },
    checkHandle: Function,
  },
  emits: ["update:content"],
  setup(props) {
    const localContent = ref();
    const dialogVisible = ref(false);

    function handleCreate() {
      localContent.value = cloneDeep(unref(props.content));
      dialogVisible.value = true;
    }

    function handleConfirm() {
      if (props.checkHandle && !props.checkHandle(localContent.value)) return;
      emit("update:content", localContent.value);
      dialogVisible.value = false;
    }

    function isNotEmpty(value) {
      if (Array.isArray(value)) {
        return value.length;
      }
      return false;
    }

    function closeDialog() {
      dialogVisible.value = false;
    }

    return {
      localContent,
      dialogVisible,
      handleConfirm,
      handleCreate,
      isNotEmpty,
      closeDialog,
    };
  },
  expose: [],
});
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode(
  " \u5F39\u7A97\u7EC4\u4EF6\u5185\u5BB9 "
);
const _hoisted_2 = { class: "dialog-footer" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53D6\u6D88");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u786E\u8BA4");

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_dialog = resolveComponent("el-dialog");
  return (
    openBlock(),
    createElementBlock("div", null, [
      renderSlot(
        _ctx.$slots,
        "trigger",
        { triggerMethod: _ctx.handleCreate },
        () => [
          createVNode(
            _component_el_button,
            {
              type: _ctx.isNotEmpty(_ctx.content) ? "warning" : "primary",
              onClick: _ctx.handleCreate,
            },
            {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(
                    _ctx.isNotEmpty(_ctx.content)
                      ? "\u7F16\u8F91"
                      : "\u521B\u5EFA"
                  ),
                  1
                ),
              ]),
              _: 1,
            },
            8,
            ["type", "onClick"]
          ),
        ]
      ),
      createVNode(
        _component_el_dialog,
        {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue":
            _cache[1] ||
            (_cache[1] = ($event) => (_ctx.dialogVisible = $event)),
          title: "\u914D\u7F6E",
          "append-to-body": "",
          "show-close": "",
        },
        {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_2, [
              createVNode(
                _component_el_button,
                {
                  onClick:
                    _cache[0] ||
                    (_cache[0] = ($event) => (_ctx.dialogVisible = false)),
                },
                {
                  default: withCtx(() => [_hoisted_3]),
                  _: 1,
                }
              ),
              createVNode(
                _component_el_button,
                {
                  type: "primary",
                  onClick: _ctx.handleConfirm,
                },
                {
                  default: withCtx(() => [_hoisted_4]),
                  _: 1,
                },
                8,
                ["onClick"]
              ),
            ]),
          ]),
          default: withCtx(() => [
            renderSlot(
              _ctx.$slots,
              "default",
              { content: _ctx.localContent },
              () => [_hoisted_1$1]
            ),
          ]),
          _: 3,
        },
        8,
        ["modelValue"]
      ),
    ])
  );
}

const DialogInstance = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
  ["render", _sfc_render$1],
]);
defineComponent({
  components: { ElButton, ElDialog },
  props: {
    buttonName: { type: String, default: "\u521B\u5EFA" },
    content: { type: Array, default: [] },
    checkHandle: Function,
  },
  emits: ["update:content"],
  setup(props) {},
  render() {
    ref(false);
    return /* @__PURE__ */ React.createElement(
      "el-button",
      null,
      /* @__PURE__ */ React.createElement("slot", null, "\u6309\u94AE")
    );
  },
  expose: [],
});
const _sfc_main = defineComponent({
  name: "ImportExcel",
  props: {
    dateFormat: {
      type: String,
    },
    timeZone: {
      type: Number,
      default: 8,
    },
  },
  emits: ["success", "error"],
  setup(props, { emit: emit2 }) {
    const inputRef = ref(null);
    const loadingRef = ref(false);

    function getHeaderRow(sheet) {
      if (!sheet || !sheet["!ref"]) return [];
      const headers = [];
      const range = XLSX.utils.decode_range(sheet["!ref"]);
      const R = range.s.r;
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        let hdr = `UNKNOWN ${C}`;
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    }
    function getExcelData(workbook) {
      const excelData = [];
      const { dateFormat, timeZone } = props;
      for (const sheetName of workbook.SheetNames) {
        const worksheet = workbook.Sheets[sheetName];
        const header = getHeaderRow(worksheet);
        let results = XLSX.utils.sheet_to_json(worksheet, {
          raw: true,
          dateNF: dateFormat,
        });
        results = results.map((row) => {
          for (const field in row) {
            if (row[field] instanceof Date) {
              if (timeZone === 8) {
                row[field].setSeconds(row[field].getSeconds() + 43);
              }
            }
          }
          return row;
        });
        excelData.push({
          header,
          results,
          meta: {
            sheetName,
          },
        });
      }
      return excelData;
    }
    function readerData(rawFile) {
      loadingRef.value = true;
      return new Promise((resolve2, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const data = e.target && e.target.result;
            const workbook = XLSX.read(data, {
              type: "array",
              cellDates: true,
            });
            const excelData = getExcelData(workbook);
            emit2("success", excelData);
            resolve2("");
          } catch (error) {
            reject(error);
            emit2("error");
          } finally {
            loadingRef.value = false;
          }
        };
        reader.readAsArrayBuffer(rawFile);
      });
    }
    async function upload(rawFile) {
      const inputRefDom = unref(inputRef);
      if (inputRefDom) {
        inputRefDom.value = "";
      }
      await readerData(rawFile);
    }
    function handleInputClick(e) {
      const files = e && e.target.files;
      const rawFile = files && files[0];
      if (!rawFile) return;
      upload(rawFile);
    }

    function handleUpload() {
      const inputRefDom = unref(inputRef);
      inputRefDom == null ? void 0 : inputRefDom.click();
    }

    return { handleUpload, handleInputClick, inputRef };
  },
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u5BFC\u5165");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock("div", null, [
      withDirectives(
        createBaseVNode(
          "input",
          {
            ref: "inputRef",
            type: "file",
            accept: ".xlsx, .xls",
            onChange:
              _cache[0] ||
              (_cache[0] = (...args) =>
                _ctx.handleInputClick && _ctx.handleInputClick(...args)),
          },
          null,
          544
        ),
        [[vShow, f,alse]]
      ),
      createBaseVNode(
        "div",
        {
          onClick,:
       ,     _c,ache[1] ||
            (_cache[1] = (...args) =>
              _ctx.handleUpload && _ctx.handleUpload(...args)),
        },
        [renderSlot(_ctx.$slots, "default", {}, () => [_hoisted_1])]
      ),
    ])
  );
}

const ImportExcel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const index = "";
export {
  DialogInstance,
  ImportExcel,
};
