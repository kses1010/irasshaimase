export const theme = {
  colors: {
    custom: {
      bg_table: '#f4f5f7',
    },
  },
} as const;

export type Theme = typeof theme;

export default theme;
