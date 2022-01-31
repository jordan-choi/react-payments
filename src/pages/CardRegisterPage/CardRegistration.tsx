import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';

const CardRegistration: React.FC = () => {
  return (
    <>
      <Card isEmpty={true} />
      <InputContainer inputTitle={'카드 번호'}>
        <Input type="text" />
        <Input type="text" />
        <Input type="password" />
        <Input type="password" />
      </InputContainer>

      <InputContainer inputTitle={'만료일'}>
        <Input type="text" placeholder="MM" />
        <Input type="text" placeholder="YY" />
      </InputContainer>

      <InputContainer inputTitle={'카드 소유자 이름(선택)'}>
        <Input
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </InputContainer>

      <InputContainer inputTitle={'보안코드(CVC/CVV)'}>
        <Input
          className="w-25"
          type="password"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </InputContainer>

      <InputContainer inputTitle={'카드 비밀번호'}>
        <Input className="w-15" type="password" />
        <Input className="w-15" type="password" />
        <Input className="w-15" type="password" />
        <Input className="w-15" type="password" />
      </InputContainer>

      <div className="button-box">
        <Link to="completed">
          <span className="button-text">다음</span>
        </Link>
      </div>
    </>
  );
};
export default CardRegistration;
