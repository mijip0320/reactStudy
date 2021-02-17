import React, {useState} from 'react';

function Counter() {
    // useState 사용할 때 상태의 기본값을 파라미터로 넣어서 호출, 배열 반환해줌
    // 여기서 첫번째 원소는 현재 상태, 두번 째 원소는 setter 함수
    const [number, setNumber] = useState(0);

//이벤트 설정
    const onIncrease = () => {
        setNumber(number+1);
    }
    const onDecrease =() => {
        setNumber(number-1);
    }

    return(
        <div>
            {/* 최신 버전으로 받음 */}
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>

        </div>
    )
}

export default Counter;