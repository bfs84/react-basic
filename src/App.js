import './App.css';
import Header from './components/Header';
import Title from "./components/Title"

function App() {
  return (
    <div>
      <Header />
      <body>
        <div style={{ paddingTop: '50px' }}>
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="これはテストの画像" />
          <Title
            title={'タイトル'}
          />
        </div>
      </body>
    </div >
  );
}

export default App;
