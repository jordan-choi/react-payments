import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';
import { css, cx } from '@emotion/css';

interface CardProps {
  isEmpty: boolean;
  cardSize?: 'small' | 'big';
  cardTopText?: string;
  cardBottomNumber?: string;
  cardBottomName?: string;
  cardBottomDuedate?: string;
}

const styles = {
  cssCardBox: css(tw`flex items-center justify-center mx-0 my-4`),
  cssCardTop: css(tw`w-full h-full flex items-center`),
  cssCardMiddle: css(tw`w-full h-full ml-12 flex items-center`),
  cssCardBottom: css(tw`w-full h-full flex flex-col items-center`),
  cssCardBottomNumber: css(tw`w-full h-full flex items-center justify-center`),
  cssCardBottomInfo: css(tw`w-full h-full flex items-center justify-between`),
};

const CardWrapper = styled.div([
  tw`flex flex-col items-center justify-center shadow-default rounded-lg`,
]);
export const EmptyCardWrapper = tw(
  CardWrapper
)`w-[20.8rem] h-[13rem] bg-gray1 text-5xl text-gray4 select-none`;
const SmallCardWrapper = tw(CardWrapper)`w-[20.8rem] h-[13rem] bg-card`;
const BigCardWrapper = tw(CardWrapper)`w-[29rem] h-[18rem] bg-card`;

const CardText = styled.span([tw`my-0 mx-6.4 align-middle font-normal`]);
const SmallCardText = tw(CardText)`text-5.6 leading-6.4`;
const BigCardText = tw(CardText)`text-7.2 leading-8`;

const CardChip = styled.div([tw`bg-cardchip rounded-[0.4rem]`]);
const SmallCardChip = tw(
  CardChip
)`w-[4rem] h-[2.6rem] left-[9.5rem] top-[12.2rem]`;
const BigCardChip = tw(CardChip)`w-[5.504rem] h-[3.577rem] text-9.6`;

export default function Card({
  isEmpty = false,
  cardSize = 'small',
  cardTopText,
  cardBottomNumber,
  cardBottomName,
  cardBottomDuedate,
}: CardProps) {
  return (
    <div className={cx(styles.cssCardBox)}>
      {isEmpty && (
        <EmptyCardWrapper>
          <div className={cx(styles.cssCardTop)}></div>
          <div className={cx(styles.cssCardMiddle)}></div>
          <div className={cx(styles.cssCardBottom)}>
            <div className="w-full h-full flex items-center justify-between">
              <SmallCardText>NAME</SmallCardText>
              <SmallCardText>MM / YY</SmallCardText>
            </div>
          </div>
        </EmptyCardWrapper>
      )}
      {!isEmpty && (
        <>
          {cardSize === 'small' ? (
            <SmallCardWrapper>
              <div className={cx(styles.cssCardTop)}>
                {cardTopText && <SmallCardText>{cardTopText}</SmallCardText>}
              </div>
              <div className={cx(styles.cssCardMiddle)}>
                <SmallCardChip />
              </div>
              <div className={cx(styles.cssCardBottom)}>
                {cardBottomNumber && (
                  <div className={cx(styles.cssCardBottomNumber)}>
                    <SmallCardText>{cardBottomNumber}</SmallCardText>
                  </div>
                )}
                <div className={cx(styles.cssCardBottomInfo)}>
                  {cardBottomName && (
                    <SmallCardText>{cardBottomName}</SmallCardText>
                  )}
                  {cardBottomDuedate && (
                    <SmallCardText>{cardBottomDuedate}</SmallCardText>
                  )}
                </div>
              </div>
            </SmallCardWrapper>
          ) : (
            <BigCardWrapper>
              <div className={cx(styles.cssCardTop)}>
                {cardTopText && <BigCardText>{cardTopText}</BigCardText>}
              </div>
              <div className={cx(styles.cssCardMiddle)}>
                <BigCardChip />
              </div>
              <div className={cx(styles.cssCardBottom)}>
                {cardBottomNumber && (
                  <div className={cx(styles.cssCardBottomNumber)}>
                    <BigCardText>{cardBottomNumber}</BigCardText>
                  </div>
                )}
                <div className={cx(styles.cssCardBottomInfo)}>
                  {cardBottomName && (
                    <BigCardText>{cardBottomName}</BigCardText>
                  )}
                  {cardBottomDuedate && (
                    <BigCardText>{cardBottomDuedate}</BigCardText>
                  )}
                </div>
              </div>
            </BigCardWrapper>
          )}
        </>
      )}
    </div>
  );
}
