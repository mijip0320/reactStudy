import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {

  

  return (
    <Wrapper>
    {/* 그냥 isSpecial만 있으면 디폴트인 true로 설정됨 */}
     <Hello name = "react" color="red" isSpecial={true} />
     <Hello color="pink" />
    </Wrapper>
    
  );
}

export default App;
