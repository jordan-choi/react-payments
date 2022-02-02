import React, { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { css } from '@emotion/css';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import Button from '../../components/Button/Button';
import useInputs from '../../hooks/useInputs';
import REGEXP from '../../../constant/regexp';

interface IForm {
  cardNumber: Array<string>;
  dueDate: Array<string>;
  securityCode: string;
  password: string;
  name?: string;
}

const CardRegistration: React.FC = () => {
  const [{ cardNumber, dueDate, name, securityCode, password }, onChange] =
    useInputs<IForm>({
      cardNumber: [],
      dueDate: [],
      name: '',
      securityCode: '',
      password: '',
    });

  const isValidCardNumber = React.useMemo(
    () =>
      REGEXP.ONLYNUMBER.test(cardNumber[0]) &&
      REGEXP.ONLYNUMBER.test(cardNumber[1]) &&
      REGEXP.ONLYNUMBER.test(cardNumber[2]) &&
      REGEXP.ONLYNUMBER.test(cardNumber[3]),
    [cardNumber]
  );

  const isValidDueDate = React.useMemo(
    () =>
      REGEXP.ONLYNUMBER.test(dueDate[0]) && REGEXP.ONLYNUMBER.test(dueDate[1]),
    [dueDate]
  );

  const isValidName = React.useMemo(
    () => name && REGEXP.USERNAME.test(name),
    [name]
  );

  const isValidSecurityCode = React.useMemo(
    () => REGEXP.ONLYNUMBER.test(securityCode),
    [securityCode]
  );

  const isValidPassword = React.useMemo(
    () => REGEXP.PASSWORD.test(password),
    [password]
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    console.log(cardNumber, dueDate, name, securityCode, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <Card isEmpty={true} />
      <InputContainer
        inputTitle={'카드 번호'}
        inputStatus={isValidCardNumber ? 'success' : 'error'}
        errorMessage="Invalid Card Number"
      >
        <Input
          tw="w-full"
          underline={false}
          type="text"
          id="card-number-0"
          name="card-number"
          value={cardNumber[0]}
          required
          aria-required
          aria-label="Card number input"
          maxLength={4}
          autoFocus
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="text"
          id="card-number-1"
          name="card-number"
          value={cardNumber[1]}
          required
          aria-required
          aria-label="Card number input"
          maxLength={4}
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="password"
          id="card-number-2"
          name="card-number"
          value={cardNumber[2]}
          required
          aria-required
          aria-label="Card number input"
          maxLength={4}
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="password"
          id="card-number-3"
          name="card-number"
          value={cardNumber[3]}
          required
          aria-required
          aria-label="Card number input"
          maxLength={4}
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer
        inputTitle={'만료일'}
        inputStatus={isValidDueDate ? 'success' : 'error'}
        errorMessage="Invalid Due date"
        inputBoxCSSstyle={css(tw`w-1/2`)}
      >
        <Input
          tw="w-full"
          underline={false}
          type="text"
          placeholder="MM"
          id="due-date-month"
          name="due-date-month"
          value={dueDate[0]}
          required
          aria-required
          aria-label="Due date month"
          maxLength={2}
          onChange={onChange}
        />
        <Input
          tw="w-full"
          underline={false}
          type="text"
          placeholder="YY"
          id="due-date-year"
          name="due-date-year"
          value={dueDate[1]}
          required
          aria-required
          aria-label="Due date year"
          maxLength={2}
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer
        inputTitle={'카드 소유자 이름(선택)'}
        inputStatus={isValidName ? 'success' : 'error'}
        errorMessage="Invalid Name"
      >
        <Input
          tw="w-full"
          underline={false}
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          id="name"
          name="name"
          value={name}
          aria-label="Name"
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer
        inputTitle={'보안코드(CVC/CVV)'}
        inputStatus={isValidSecurityCode ? 'success' : 'error'}
        errorMessage="Invalid Security code"
        inputBox={false}
      >
        <Input
          underline={false}
          tw="w-1/4"
          type="password"
          id="security-code"
          name="security-code"
          value={securityCode}
          required
          aria-required
          aria-label="Security code"
          maxLength={3}
          onChange={onChange}
        />
      </InputContainer>

      <InputContainer inputTitle={'카드 비밀번호'} inputBox={false}>
        <Input
          underline={false}
          tw="w-3/20 mr-3"
          type="password"
          id="card-password-0"
          name="card-password"
          value={password[0]}
          required
          aria-required
          aria-label="Card password"
          maxLength={1}
          onChange={onChange}
        />
        <Input
          underline={false}
          tw="w-3/20 mr-3"
          type="password"
          id="card-password-1"
          name="card-password"
          value={password[1]}
          required
          aria-required
          aria-label="Card password"
          maxLength={1}
          onChange={onChange}
        />
        <Input
          underline={false}
          tw="w-3/20 mr-3"
          type="password"
          id="card-password-2"
          name="card-password"
          value={password[2]}
          required
          aria-required
          aria-label="Card password"
          maxLength={1}
          onChange={onChange}
        />
        <Input
          underline={false}
          tw="w-3/20"
          type="password"
          id="card-password-3"
          name="card-password"
          value={password[4]}
          required
          aria-required
          aria-label="Card password"
          maxLength={1}
          onChange={onChange}
        />
      </InputContainer>

      <Button
        type="submit"
        disabled={
          !isValidCardNumber ||
          !isValidDueDate ||
          !isValidName ||
          !isValidSecurityCode ||
          !isValidPassword
        }
        aria-label="submit input"
        buttonText="다음"
        buttonCSSstyle={css(tw`absolute right-0 top-0`)}
      />
    </form>
  );
};
export default CardRegistration;
