import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contents">
          <Left />
          <Right />
        </div>
        <Marks />
        <Bottom />
      </div>
    </footer>
  );
};

export default Footer;

const Left = () => {
  return (
    <div className="left">
      <h2>
        고객행복센터 <span>365일 오전 7시 - 오후 7시</span>
      </h2>
      <strong>1644-1107</strong>
      <div>
        <button>카카오톡 문의</button>
        <button>1:1 문의</button>
        <button>대량주문 문의</button>
      </div>
      <div>
        비회원 문의: <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a>
        <br></br>
        비회원 대량주문 문의:{' '}
        <a href="mailto:kurlygift@kurlycorp.com">kurlygift@kurlycorp.com</a>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="right">
      <ul className="corp-menu">
        {FOOTER_DATA.map(el => {
          return <li key={el.id}>{el.content}</li>;
        })}
      </ul>
      <div className="corp-info">
        법인명 (상호) : 주식회사 컬리 <span>|</span> 사업자등록번호 :
        261-81-23567 <Link to="">사업자정보 확인</Link>
        <br></br>
        통신판매업 : 제 2018-서울강남-01646 호 <span>|</span>
        개인정보보호책임자 : 이원준
        <br></br>
        주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span>|</span>
        대표이사 : 김슬아
        <br></br>
        입점문의 : 입점문의하기 <span>|</span> 제휴문의 : 입점문의하기 <br></br>
        채용문의 : recruit@kurlycorp.com <br></br> 팩스 : 070 - 7500 - 6098
      </div>
      <ul className="corp-links">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

const Marks = () => {
  return (
    <div className="footer-marks">
      <button className="mark date">
        <div>1</div>
      </button>
      <button className="mark privacy">2</button>
      <button className="mark toss">3</button>
      <button className="mark uri">4</button>
    </div>
  );
};
const Bottom = () => {
  return (
    <div className="footer-bottom">
      마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는
      마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
      <br></br>
      마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의
      당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와
      책임을 부담하지 않습니다.
      <em>© KURLY CORP. ALL RIGHTS RESERVED</em>
    </div>
  );
};

const FOOTER_DATA = [
  {
    id: 1,
    content: '컬리소개',
  },
  {
    id: 2,
    content: '컬리소개영상',
  },
  {
    id: 1,
    content: '인재채용',
  },
  {
    id: 1,
    content: '이용약관',
  },
  {
    id: 1,
    content: '개인정보처리방침',
  },
  {
    id: 1,
    content: '이용안내',
  },
];
