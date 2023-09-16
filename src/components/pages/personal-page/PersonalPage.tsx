import React, {FC, useState} from 'react'


const PersonalPage: FC = () => {
  const [show, setShow] = useState(false)
  return (
      <div>
        
        <button onClick={() => setShow(true)}>Кнопка Админа</button>
        
        {show ? <div>
          Привет, Админ!
        </div> : ''}
      
      </div>
  )
}

export default React.memo(PersonalPage)