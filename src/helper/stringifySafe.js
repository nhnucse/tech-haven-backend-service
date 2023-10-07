import * as util from 'util';

export const stringifySafe = (obj, replacer = null, space = 0) => {
  return JSON.stringify(util.inspect(obj), replacer, space);
};