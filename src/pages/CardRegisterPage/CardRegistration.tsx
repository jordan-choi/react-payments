import React, { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { css } from '@emotion/css';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import Button from '../../components/Button/Button';
import useInputs from '../../hooks/useInputs';

interface IForm {
  cardNumber: Array<string>;
  dueDate: Array<string>;
  name?: string;
  securityCode: string;
  password: number[];
}

const CardRegistration: React.FC = () => {
  const [{ cardNumber, dueDate, name, securityCode, password }, onChange] =
    useInputs<IForm>({
      cardNumber: [],
      dueDate: [],
      name: '',
      securityCode: '',
      password: [],
    });

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    console.log(cardNumber, dueDate, name, securityCode, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <Card isEmpty={true} />
      <InputContainer
        inputTitle={'카드 번호'}
        errorMessage="Invalid Card Number"
      >
        <Input
          tw="w-full"
          underline={false}
          type="text"
          name="card-number-0"
          value={cardNumber[0]}
          required
          aria-required
          aria-label="Card number input"
          autoFocus
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="text"
          name="card-number-1"
          value={cardNumber[1]}
          required
          aria-required
          aria-label="Card number input"
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="password"
          name="card-number-2"
          value={cardNumber[2]}
          required
          aria-required
          aria-label="Card number input"
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="password"
          name="card-number-3"
          value={cardNumber[3]}
          required
          aria-required
          aria-label="Card number input"
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer inputTitle={'만료일'} inputBoxCSSstyle={css(tw`w-1/2`)}>
        <Input
          tw="w-full"
          underline={false}
          type="text"
          placeholder="MM"
          name="due-date-month"
          value={dueDate[0]}
          required
          aria-required
          aria-label="Due date month"
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="text"
          placeholder="YY"
          name="due-date-year"
          value={dueDate[1]}
          required
          aria-required
          aria-label="Due date year"
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer inputTitle={'카드 소유자 이름(선택)'}>
        <Input
          tw="w-full"
          underline={false}
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          name="name"
          value={name}
          aria-label="Name"
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer inputTitle={'보안코드(CVC/CVV)'} inputBox={false}>
        <Input
          tw="w-1/4"
          underline={false}
          type="password"
          name="security-code"
          value={securityCode}
          required
          aria-required
          aria-label="Security code"
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer inputTitle={'카드 비밀번호'} inputBox={false}>
        <Input
          underline={false}
          tw="w-3/20 mr-3"
          type="password"
          name="card-password-0"
          value={password[0]}
          required
          aria-required
          aria-label="Card password"
          onChange={onChange}
        />
        <Input
          underline={false}
          tw="w-3/20 mr-3"
          type="password"
          name="card-password-1"
          value={password[1]}
          required
          aria-required
          aria-label="Card password"
          onChange={onChange}
        />
        <Input
          underline={false}
          tw="w-3/20 mr-3"
          type="password"
          name="card-password-2"
          value={password[2]}
          required
          aria-required
          aria-label="Card password"
          onChange={onChange}
        />
        <Input
          underline={false}
          tw="w-3/20"
          type="password"
          name="card-password-3"
          value={password[4]}
          required
          aria-required
          aria-label="Card password"
          onChange={onChange}
        />
      </InputContainer>

      <Button
        type="submit"
        aria-label="submit input"
        buttonText="다음"
        buttonCSSstyle={css(tw`absolute right-0 top-0`)}
      />
    </form>
  );
};
export default CardRegistration;
