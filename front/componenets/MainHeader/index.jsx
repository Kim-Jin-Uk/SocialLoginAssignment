import { Dropdown, Menu } from 'antd'
import gravatar from 'gravatar'
import Router from 'next/router'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GET_EMAIL_REQUEST, LOGOUT_REQUEST } from '../../reducers/user'
import styles from '../../styles/components/MainHeader.module.scss'

const MainHeader = () => {
  const dispatch = useDispatch()
  const { userEmail } = useSelector((state) => state.user)

  const onClickSignUp = useCallback(() => {
    Router.push('/signup')
  }, [])

  const onClickLogIn = useCallback(() => {
    Router.push('/login')
  }, [])

  const onClickIcon = useCallback(() => {
    Router.push('https://github.com/Kim-Jin-Uk/SocialLoginAssignment')
  }, [])

  useEffect(() => {
    dispatch({
      type: GET_EMAIL_REQUEST,
    })
  }, [])

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
  }, [])

  const menu = (
    <Menu onClick={onClickLogOut}>
      <Menu.Item>로그아웃</Menu.Item>
    </Menu>
  )

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.icon} onClick={onClickIcon}></div>
        {userEmail != '' ? (
          <>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <img
                src={'http:' + gravatar.url(userEmail, { s: '28px', d: 'retro' })}
                alt={userEmail}
                className={styles.profile_icon}
              ></img>
            </Dropdown>
            <div className={styles.profile_email}>{userEmail}</div>
          </>
        ) : (
          <>
            <button className={`${styles.public_button} ${styles.signup_button}`} onClick={onClickSignUp}>
              회원가입
            </button>
            <button className={`${styles.public_button} ${styles.login_button}`} onClick={onClickLogIn}>
              로그인
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default MainHeader
