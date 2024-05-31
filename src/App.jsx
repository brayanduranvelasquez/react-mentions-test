import Input from './components/Input';

const options = {
  user: 'user',
  ticket: 'ticket',
};

function App() {
  return (
    <div style={{ padding: 10 }}>
      <Input options={options} placeholder="Input {{user}} or {{ticket}}" />
    </div>
  );
}

export default App;
