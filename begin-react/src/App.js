import './App.css';
import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  //배열 선언
  const [users, setUsers] = useState( [
    {
        id :1,
        username: 'velopert',
        email:'public.velopert@gmail.com'
    },
    {
        id :2,
        username: 'tester',
        email:'tester@gmail.com'
    },
    {
        id :3,
        username: 'liz',
        email:'lizt@gmail.com'
    }
]);

//useRef()를 사용할 때 파라미터를 넣어주면 이 값이 .current 값의 기본값이 됨
//수정과 조회 시 .current 값으로 수정/조회
const nextId = useRef(4);
const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  //setUsers([...users, user]);
 setUsers(users.concat(user)); //->사용 가능

  setInputs({
    username: '',
    email: ''
  });
  nextId.current += 1;
}

const onRemove = id => {
  //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //= user.id가 id인 것을 제거
  setUsers(users.filter(user => user.id !== id));
}

  return (
    <>
      <CreateUser
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  )

}

export default App;
