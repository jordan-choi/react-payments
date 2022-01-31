import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';

const CardRegistration: React.FC = () => {
  return (
    <div>
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};
export default CardRegistration;
