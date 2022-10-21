const BASE_FONT_SIZE_PX = 10;

const unitToRem = (val) => `${val}rem`;
const pxToRem = (val, baseFontSize = BASE_FONT_SIZE_PX) => val / baseFontSize;
const pxUnitToRem = (val) => unitToRem(pxToRem(val));

const addPxSuffix = (val) => `${val}-px`;

const noop = (val) => val;
const createScale = ({ min = 0, max = 100, steps = 1, formatVal = noop, formatKey = noop }) => {
  const limit = Math.round((max - min) / steps);
  const scale = [...new Array(limit + 1)].map((_, i) => min + i * steps);

  return scale.reduce((prev, curr) => {
    const key = String(formatKey(curr));
    const val = curr === 0 ? curr : formatVal(curr);
    return { ...prev, [key]: val };
  }, {});
};

module.exports = {
  baseFontSizePx: BASE_FONT_SIZE_PX,
  pxToRem,
  pxUnitToRem,
  addPxSuffix,
  createScale,
};
