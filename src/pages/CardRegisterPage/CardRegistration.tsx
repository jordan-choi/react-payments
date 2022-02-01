import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import Button from '../../components/Button/Button';

const CardRegistration: React.FC = () => {
  return (
    <>
      <Card isEmpty={true} />
      <InputContainer
        inputTitle={'카드 번호'}
        errorMessage="Invalid Card Number"
      >
        <Input
          underline={false}
          type="number"
          name="card-number-0"
          required
          aria-required
          aria-label="Card number input"
          autoFocus
        />
        <Input
          underline={false}
          type="number"
          name="card-number-1"
          required
          aria-required
          aria-label="Card number input"
        />
        <Input
          underline={false}
          type="password"
          name="card-number-2"
          required
          aria-required
          aria-label="Card number input"
        />
        <Input
          underline={false}
          type="password"
          name="card-number-3"
          required
          aria-required
          aria-label="Card number input"
        />
      </InputContainer>

      <InputContainer inputTitle={'만료일'}>
        <Input
          underline={false}
          type="number"
          placeholder="MM"
          name="due-date-month"
          required
          aria-required
          aria-label="Due date month"
        />
        <Input
          underline={false}
          type="number"
          placeholder="YY"
          name="due-date-year"
          required
          aria-required
          aria-label="Due date year"
        />
      </InputContainer>

      <InputContainer inputTitle={'카드 소유자 이름(선택)'}>
        <Input
          underline={false}
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          name="name"
          aria-label="Name"
        />
      </InputContainer>

      <InputContainer inputTitle={'보안코드(CVC/CVV)'}>
        <Input
          underline={false}
          className="w-25"
          type="password"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          name="cvc-code"
          required
          aria-required
          aria-label="CVC/CVV code"
        />
      </InputContainer>

      <InputContainer inputTitle={'카드 비밀번호'}>
        <Input
          underline={false}
          className="w-15"
          type="password"
          name="card-password-0"
          required
          aria-required
          aria-label="Card password"
        />
        <Input
          underline={false}
          className="w-15"
          type="password"
          name="card-password-1"
          required
          aria-required
          aria-label="Card password"
        />
        <Input
          underline={false}
          className="w-15"
          type="password"
          name="card-password-2"
          required
          aria-required
          aria-label="Card password"
        />
        <Input
          underline={false}
          className="w-15"
          type="password"
          name="card-password-3"
          required
          aria-required
          aria-label="Card password"
        />
      </InputContainer>

      <Link to="completed">
        <Button buttonText="다음" />
      </Link>
    </>
  );
};
export default CardRegistration;
