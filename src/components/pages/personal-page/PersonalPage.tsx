import * as React from 'react';
import {useState} from 'react';

const PersonalPage: React.FC = () => {
  const [show, setShow] = useState(false)


  return (
    <div>

      <button onClick={() => setShow(true)}>Кнопка Админа</button>

      {show ? <div>
        Привет, Админ!
      </div> : ''}

    </div>
  );
};

export default PersonalPage;
