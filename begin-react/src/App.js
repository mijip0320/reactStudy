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
    //active 값에 따라 폰트 색상 바꿔주기
    {
        id :1,
        username: 'velopert',
        email:'public.velopert@gmail.com',
        active: true
    },
    {
        id :2,
        username: 'tester',
        email:'tester@gmail.com',
        active: false
    },
    {
        id :3,
        username: 'liz',
        email:'lizt@gmail.com',
        active: false
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

//id가 _인 객체 삭제
//onRemove 함수는 UserList 에서도 전달 받을것이며, 이를 그대로 User 컴포넌트에게 전달해줄것
const onRemove = id => {
  //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //= user.id가 id인 것을 제거
  setUsers(users.filter(user => user.id !== id));
}

//수정하는 함수
//id 값을 비교해서 id 가 다르다면 그대로 두고, 같다면 active 값을 반전시키도록 구현
//UserList 컴포넌트에서 onToggle를 받아와서 User 에게 전달해주고, onRemove 를 구현했었던것처럼 onToggle 에 id 를 넣어서 호출
const onToggle = id => {
  setUsers(
    users.map(user => 
      user.id === id ? {...user, active: !user.active } : user
      )
  );
};

  return (
    <>
      <CreateUser
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )

}

export default App;
