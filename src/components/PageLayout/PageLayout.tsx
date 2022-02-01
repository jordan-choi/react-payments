import React from 'react';
import tw from 'twin.macro';
import { css, cx } from '@emotion/css';
interface PageLayoutProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const styles = {
  cssPageLayout: css(tw`h-full py-6.4 px-9.6 bg-white`),
};

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className={cx(styles.cssPageLayout)}>{children}</div>;
}
