import React from 'react';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';
import BackButton from '../Button/BackButton';

interface HeaderProps {
  headerTitle: string;
}

const HeaderWrapper = styled.div([tw`w-full flex items-center`]);
const PageTitle = styled.h2([
  tw`font-medium text-8 leading-[2.2rem] flex items-center text-gray6`,
]);

export default function Header({ headerTitle }: HeaderProps) {
  return (
    <HeaderWrapper>
      <BackButton />
      <PageTitle>{headerTitle}</PageTitle>
    </HeaderWrapper>
  );
}
