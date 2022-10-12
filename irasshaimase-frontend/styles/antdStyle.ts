import { css } from '@emotion/react';

export const antdStyle = css`
  .ant-input,
  .ant-select,
  .ant-select-item,
  .ant-picker-input > input {
    font-size: 14px;
  }

  .ant-table {
    font-size: 13px;
  }

  .ant-table-thead .ant-table-cell {
    padding: 8px 12px;

    &:before {
      display: none;
    }
  }

  .ant-table-tbody .ant-table-cell {
    padding: 8px 12px;
  }

  .ant-pagination-item-active {
    border-color: #d1d6db;
  }

  .ant-table-tbody tr.ant-table-row-selected > td {
    border-color: #d1d6db;
  }
`;
