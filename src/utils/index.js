export function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

export function maybe(cond, value) {
  if (!cond) return '';
  return (typeof value === 'function') ? value() : value;
}

export function range(start, stop, step) {
  let count = 0, old = start;
  let initial = n => (n > 0 && n < 1) ? .1 : 1;
  let length = arguments.length;
  if (length == 1) [start, stop] = [initial(start), start];
  if (length < 3) step = initial(start);
  let range = [];
  while ((step >= 0 && start <= stop)
    || (step < 0 && start > stop)) {
    range.push(start);
    start += step;
    if (count++ >= 1000) break;
  }
  if (!range.length) range.push(old);
  return range;
}

export function alias_for(obj, names) {
  Object.keys(names).forEach(n => {
    obj[n] = obj[names[n]];
  });
  return obj;
}

export function is_letter(c) {
  return /^[a-zA-Z]$/.test(c);
}

export function is_nil(s) {
  return s === undefined || s === null;
}

export function lazy(fn) {
  let wrap = () => fn;
  wrap.lazy = true;
  return wrap;
}

export function sequence(count, fn) {
  let [x, y = 1] = String(count).split('x');
  x = clamp(parseInt(x) || 1, 1, 65536);
  y = clamp(parseInt(y) || 1, 1, 65536);
  let max = x * y;
  let ret = [];
  let index = 1;
  for (let i = 1; i <= y; ++i) {
    for (let j = 1; j <= x; ++j) {
      ret.push(fn(index++, j, i, max));
    }
  }
  return ret;
}

export function cell_id(x, y, z) {
  return 'c-' + x + '-' + y + '-' + z;
}

export function get_value(input) {
  while (input && input.value) {
    return get_value(input.value);
  }
  return is_nil(input) ? '' : input;
}
