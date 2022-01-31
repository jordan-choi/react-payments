import React from 'react';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

interface PageLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="h-full py-[1.6rem] px-[2.4rem]">{children}</div>;
}
