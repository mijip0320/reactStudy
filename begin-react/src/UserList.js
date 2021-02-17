import React from 'react';

function User({user, onRemove}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onpointermove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove}){
    
    return(
        <div>
           {users.map(user => (
            //    인덱스를 키 값으로 설정(고유번호)
            //    배열을 렌더링 할 때에는 key라는 props를 설정해야함
               <User user={user} key={user.id} onRemove={onRemove} />
           ))}
             
        </div>
    );

}
export default UserList;