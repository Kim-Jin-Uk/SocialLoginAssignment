import Router from 'next/router'
import { MouseEventHandler, useCallback } from 'react'

import SignWrapper from '../../componenets/SignWrapper'
import styles from '../../styles/Sign.module.scss'

const Signup = () => {
  const onClickLogIn: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    Router.replace('/login')
  }, [])

  return (
    <>
      <SignWrapper>
        <div className={styles.title}>회원가입</div>
        <div className={styles.sub_title}>
          기존 사용자이신가요?&nbsp;
          <div className={styles.signin} onClick={onClickLogIn}>
            <span>로그인 하기</span>
          </div>
        </div>

        <div>
          <div className={`${styles.sns_btn} ${styles.naver_btn}`}>
            <div>
              <div className={styles.naver_icon}></div>
              <div>네이버 아이디로 회원가입</div>
            </div>
          </div>
          <div className={`${styles.sns_btn} ${styles.kakao_btn}`}>
            <div>
              <div className={styles.kakao_icon}></div>
              <div>카카오 계정으로 회원가입</div>
            </div>
          </div>
        </div>
      </SignWrapper>
    </>
  )
}

export default Signup
