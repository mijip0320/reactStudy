import React from 'react';

function Hello({color, name, isSpecial}) {
    return (
    <div style={{color}}>
        {/* true라면 볼드체로 출력, 아니라면 null 출력 */}
        {isSpecial ? <b>*</b> : null}
        안녕하세요 {name}
        
     </div>
     );
}

Hello.defaultProps = {
    name: '이름 없음'
}

export default Hello;