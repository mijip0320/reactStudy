import React, { useEffect } from 'react';

function User({user, onRemove, onToggle}){
    //마운트/언마운트
    //useEffect 사용시 천번 째 파라미터에 함수, 두번 째 파라미터에는 의존값이 들어있는 배열(deps)를 넣음
    //만약 deps 배열을 비우게 되면 컴포넌트가 처음 나타날때에만 useEffect에 등록한 함수가 호출 됨
    useEffect(() => {
       console.log(user);
    });

    return(
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick={() => onToggle(user.id)}
            >{user.username}</b> 
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
    
    return(
        <div>
           {users.map(user => (
            //    인덱스를 키 값으로 설정(고유번호)
            //    배열을 렌더링 할 때에는 key라는 props를 설정해야함
               <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
           ))}
             
        </div>
    );

}
export default UserList;