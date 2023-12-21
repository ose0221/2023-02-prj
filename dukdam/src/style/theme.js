import { css } from 'styled-components';

const colors = {
  green: '#75FF72',
  darkpurple: '#20217D',
  yellow: '#FFD600',
  grey: '#EEEEEE',
  black: '#000000',
  white: '#FFFFFF',
};

const fonts = {
  title: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    letter-spacing: 0.07em;
  `,
  text: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 0.07em;
  `,
};

export const theme = {
  colors,
  fonts,
};
