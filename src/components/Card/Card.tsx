import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';
import { css, cx } from '@emotion/css';

interface CardProps {
  isEmpty: boolean;
  cardSize?: 'small' | 'big';
}

const styles = {
  cssCardBox: css(tw`flex items-center justify-center mx-0 my-4`),
  cssCardTop: css(tw`w-full h-full flex items-center`),
  cssCardMiddle: css(tw`w-full h-full ml-12 flex items-center`),
  cssCardBottom: css(tw`w-full h-full flex flex-col items-center`),
  cssCardText: css(
    tw`my-0 mx-6.4 text-5.6 leading-6.4 align-middle font-normal`
  ),
};

const CardWrapper = styled.div([
  tw`flex flex-col items-center justify-center w-83.2 h-52`,
]);

const EmptyCardWrapper = tw(
  CardWrapper
)`bg-gray1 text-5xl text-gray4 shadow-default rounded-lg select-none`;

export default function Card({
  isEmpty = false,
  cardSize = 'small',
}: CardProps) {
  return (
    <div className={cx(styles.cssCardBox)}>
      {isEmpty ? (
        <EmptyCardWrapper>
          <div className={cx(styles.cssCardTop)}></div>
          <div className={cx(styles.cssCardMiddle)}></div>
          <div className={cx(styles.cssCardBottom)}>
            <div className="w-full h-full flex items-center justify-between">
              <span className={cx(styles.cssCardText)}>NAME</span>
              <span className={cx(styles.cssCardText)}>MM / YY</span>
            </div>
          </div>
        </EmptyCardWrapper>
      ) : (
        <>
          <div className={cx(styles.cssCardTop)}></div>
          <div className={cx(styles.cssCardMiddle)}></div>
          <div className={cx(styles.cssCardBottom)}></div>
        </>
      )}
    </div>
  );
}
