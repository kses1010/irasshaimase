import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import Head from 'next/head';
import React from 'react';

import { globalStyle } from '~styles/globalStyle';

interface Props {
  title?: string;
  breadcrumbs?: string[];
  rightComponent?: React.ReactNode;
}

export const CommonLayout = ({ title, breadcrumbs, rightComponent, children }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
          name="viewport"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Global styles={globalStyle} />
      <RootLayout hasSider>{children}</RootLayout>
    </>
  );
};

const RootLayout = styled(Layout)`
  min-width: 1280px;
  min-height: 100vh;
`;
