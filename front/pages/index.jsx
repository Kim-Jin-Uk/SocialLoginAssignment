import MainHeader from '../componenets/MainHeader'
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className={styles.contents_wrapper}>
        <p>
          <b>Connectly 지원자 김진욱 입니다</b>
        </p>
        <ul>
          <li>
            <b>기술스택</b>
            <br />
            프론트: Next.js
            <br />
            백: Express
          </li>
          <br />
          <li>
            <b>소셜로그인</b>
            <br />
            카카오, 네이버 로그인을 연동하였습니다. - passport-kakao, passport-naver-v2
            <br />
            네이버의 경우 필수 항목에 동의 하지 않아도 처리가 되기 때문에 passport-naver-v2를 사용하였습니다
            <br />
            필수수집사항으로 이메일 정보를 수집하며
            <br />
            네이버의 경우 실베포 상황이 아니기에 개발자 계정으로만 로그인 되어집니다.
          </li>
          <br />
          <li>
            <b>추가적인 기능</b>
            <br />
            로그인 및 회원가입 페이지를 반응형으로 구축 하였으며
            <br />
            해당 페이지의 데스크탑 화면(1024px 이상)에서 좌측 화면에 인터렉션을 적용해 보았습니다 (호버시 확대)
            <br />
            <br />
            리덕스 사가를 통해 유저 데이터를 관리해보았습니다
            <br />
            <br />
            로그인시 첫 화면으로 되돌아오며 antd, gravatar를 이용해 프로필 아이콘을 설정하였고
            <br />
            호버시 로그아웃이 가능하도록 구현하였습니다
          </li>
        </ul>
        <b>감사합니다</b>
      </div>
    </>
  )
}

export default Home
