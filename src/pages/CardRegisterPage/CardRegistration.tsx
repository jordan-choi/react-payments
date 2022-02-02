import React, { useCallback, FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import { css } from '@emotion/css';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import useInputs from '../../hooks/useInputs';
import REGEXP from '../../../constant/regexp';

interface IForm {
  cardNumber0: string;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  dueDateMM: string;
  dueDateYY: string;
  securityCode: string;
  password0: string;
  password1: string;
  password2: string;
  password3: string;
  name?: string;
}

const CardRegistration: React.FC = () => {
  const navigate = useNavigate();
  const onClick = useCallback(
    () => navigate('completed', { replace: true }),
    [navigate]
  );

  const [
    {
      cardNumber0,
      cardNumber1,
      cardNumber2,
      cardNumber3,
      dueDateMM,
      dueDateYY,
      name,
      securityCode,
      password0,
      password1,
      password2,
      password3,
    },
    onChange,
  ] = useInputs<IForm>({
    cardNumber0: '',
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    dueDateMM: '',
    dueDateYY: '',
    name: '',
    securityCode: '',
    password0: '',
    password1: '',
    password2: '',
    password3: '',
  });

  const isValidCardNumber = React.useMemo(
    () =>
      REGEXP.ONLYNUMBER.test(cardNumber0) &&
      REGEXP.ONLYNUMBER.test(cardNumber1) &&
      REGEXP.ONLYNUMBER.test(cardNumber2) &&
      REGEXP.ONLYNUMBER.test(cardNumber3),
    [cardNumber0, cardNumber1, cardNumber2, cardNumber3]
  );

  const isValidDueDate = React.useMemo(
    () => REGEXP.MONTH.test(dueDateMM) && REGEXP.ONLYNUMBER.test(dueDateYY),
    [dueDateMM, dueDateYY]
  );

  const isValidSecurityCode = React.useMemo(
    () => REGEXP.ONLYNUMBER.test(securityCode),
    [securityCode]
  );

  const isValidPassword = React.useMemo(
    () =>
      REGEXP.ONLYNUMBER.test(password0) &&
      REGEXP.ONLYNUMBER.test(password1) &&
      REGEXP.ONLYNUMBER.test(password2) &&
      REGEXP.ONLYNUMBER.test(password3),
    [password0, password1, password2, password3]
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header headerTitle="카드 추가" backButtonOnclick={() => navigate(-1)} />
      <form onSubmit={onSubmit}>
        {!!cardNumber0 || !!dueDateMM || !!dueDateYY || !!name ? (
          <Card
            isEmpty={false}
            cardSize="small"
            cardBottomNumber={`${cardNumber0 || ''} - ${cardNumber1 || ''} - ${
              (cardNumber2 && cardNumber2.replace(/./g, '*')) || ''
            } - ${(cardNumber3 && cardNumber3.replace(/./g, '*')) || ''}`}
            cardBottomName={name || 'NAME'}
            cardBottomDuedate={`${dueDateMM || 'MM'} / ${dueDateYY || 'YY'}`}
          />
        ) : (
          <Card isEmpty={true} />
        )}

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
            name="cardNumber0"
            value={cardNumber0}
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
            name="cardNumber1"
            value={cardNumber1}
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
            name="cardNumber2"
            value={cardNumber2}
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
            name="cardNumber3"
            value={cardNumber3}
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
            name="dueDateMM"
            value={dueDateMM}
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
            name="dueDateYY"
            value={dueDateYY}
            required
            aria-required
            aria-label="Due date year"
            maxLength={2}
            onChange={onChange}
          />
        </InputContainer>

        <InputContainer
          inputTitle={'카드 소유자 이름(선택)'}
          inputStatus={'default'}
          errorMessage={`${(name && name.length) || 0}자 / 30자`}
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
            maxLength={30}
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
            name="securityCode"
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
            name="password0"
            value={password0}
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
            name="password1"
            value={password1}
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
            name="password2"
            value={password2}
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
            name="password3"
            value={password3}
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
            !isValidSecurityCode ||
            !isValidPassword
          }
          onClick={onClick}
          aria-label="submit input"
          buttonText="다음"
          buttonCSSstyle={css(tw`absolute right-0 top-0`)}
        />
      </form>
    </>
  );
};
export default CardRegistration;
