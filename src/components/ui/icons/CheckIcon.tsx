import React, {FC} from 'react'
import {Icon} from './index'

const CheckIcon: FC<Icon> = (props?) => {
  return (
      <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <path d="M21.0769 5.65717C21.3698 5.95006 21.3698 6.42494 21.0769 6.71783L10.8281 16.9666C9.60528 18.1894 7.62268 18.1894 6.39985 16.9666L2.59467 13.1614C2.30178 12.8685 2.30178 12.3936 2.59467 12.1008C2.88756 11.8079 3.36244 11.8079 3.65533 12.1008L7.46051 15.9059C8.09755 16.543 9.1304 16.543 9.76745 15.9059L20.0162 5.65717C20.3091 5.36428 20.784 5.36428 21.0769 5.65717Z"/>
      </svg>
  )
}
export default React.memo(CheckIcon)

