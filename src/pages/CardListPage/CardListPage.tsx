import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

const CardListPage: React.FC = () => {
  return (
    <>
      <div tw="flex justify-center items-center">
        <h2 className="page-title" tw="mb-1">
          보유 카드
        </h2>
      </div>
      <>
        <Card
          isEmpty={false}
          cardSize="small"
          cardTopText="클린카드"
          cardBottomNumber="1111 - 2222 - oooo - oooo"
          cardBottomName="YUJO"
          cardBottomDuedate="12 / 23"
        />
        <span className="card-nickname">법인카드</span>
      </>
      <Link to="register-card" tw="hover:cursor-pointer">
        <Card isEmpty={true} />
      </Link>
    </>
  );
};
export default CardListPage;
