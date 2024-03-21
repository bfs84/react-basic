import './App.css';
import {Article, Header} from './components/index';

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '50px' }}>
        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="これはテストの画像" />
      </div>
      <Article title={"ここがタイトルです"} content={"こいつはコンテンツ"} />
    </div>
  );
}

export default App;
