import Chatbot from './components/Chatbot';

function App() {
  return (
    <div style={{
      backgroundColor: '#fafafa',
      minHeight: '50vh',
      width: '50vh',
      left: '35%',
      top: '10%', 
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      position: 'absolute',
      display: 'flex',
      align: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Chatbot />
    </div>
  );
}

export default App;