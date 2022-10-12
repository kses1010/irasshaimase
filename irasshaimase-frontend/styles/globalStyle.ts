import { css } from '@emotion/react';
import { antdStyle } from './antdStyle';
import { Theme } from '~styles/theme';

const baseGlobalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  textarea,
  button,
  select {
    margin: 0;
    padding: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    border: 0;
    vertical-align: top;
  }

  em,
  address {
    font-style: normal;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
  }

  input,
  textarea {
    -webkit-appearance: none;
    border-radius: 0;
  }

  input::-ms-clear {
    display: none;
  }

  body,
  input,
  select,
  textarea,
  button,
  a {
    -webkit-text-size-adjust: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR',
      'Segoe UI', 'Malgun Gothic', sans-serif;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  html,
  body {
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR',
      'Segoe UI', 'Malgun Gothic', sans-serif;
  }

  ${antdStyle}
`;

export const globalStyle = (theme: Theme) => css`
  ${baseGlobalStyle}

  img {
    max-width: 100%;
  }
`;
