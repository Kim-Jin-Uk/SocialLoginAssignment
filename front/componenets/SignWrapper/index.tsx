import { FC } from 'react'

import styles from '../../styles/components/SignWrapper.module.scss'
interface Props {}

const SignWrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.sign_wrapper}>
        <div>
          <div className={styles.sign_image}>
            <div className={styles.black_cover}>
              <div> Frontend Developer KimJinUk </div>
            </div>
          </div>
        </div>
        <aside className={styles.sign_children}>
          <div>{children}</div>
        </aside>
      </div>
    </>
  )
}

export default SignWrapper
