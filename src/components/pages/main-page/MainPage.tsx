import * as React from 'react';
import Title from '../../ui/title/Title';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../routes';
import {useState} from "react";
import {IUser} from "../../../models/IUser";
// import {registerUser} from "../../../store/action-creators/user-register";
import {registerUser} from "../../../store/reducers/auth-slice";
import {useDispatch} from "react-redux";


const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  
  const [user, setUser] = useState<IUser>({
    name: '',
    password: '',
    email: ''
  })
  
  const submitHandler = (evt) => {
    evt.preventDefault()
    dispatch(registerUser(user))
  }
  
  
  const changeHandler = (evt) => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.value
    })
  }
  
  
  return (
    <>
      <Link to={AppRoute.PERSONAL}>В личный кабинет</Link>
      <Title size="24px" level="h2">Title</Title>
      Здесь есть какой-то текст: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis error
      fuga iusto nesciunt officiis quisquam soluta veritatis? Aut autem consequatur corporis dignissimos
      distinctio
      doloribus est id ipsam minus necessitatibus nobis odio, quam quisquam quod recusandae sapiente, sed suscipit
      totam.
      
      <form action='/'>
        <div>
          <input
            type="text"
            placeholder="username"
            name='name'
            value={user.name}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name='email'
            value={user.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name='password'
            value={user.password}
            onChange={changeHandler}
            required
          />
        </div>
        <button type='submit' onClick={submitHandler}>register</button>
      </form>
    </>
  );
};

export default MainPage;
