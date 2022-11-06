import { colors } from '../utils/colors';

export function useColor() {
  const getColor = (color: string) => {
    return colors[color] ? colors[color] : colors.primary;
  };

  const getInvertColor = (color: string) => {
    let hexa = colors[color];

    if (hexa.indexOf('#') === 0) {
      hexa = hexa.slice(1);
    }

    if (hexa.length === 3) {
      hexa = hexa[0] + hexa[0] + hexa[1] + hexa[1] + hexa[2] + hexa[2];
    }

    if (hexa.length !== 6) {
      throw new Error('Invalid hexa color.');
    }

    const r = parseInt(hexa.slice(0, 2), 16);
    const g = parseInt(hexa.slice(2, 4), 16);
    const b = parseInt(hexa.slice(4, 6), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? colors.black : colors.white;
  };

  return { getColor, getInvertColor };
}
