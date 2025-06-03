import { useState } from 'react';
<></>
function App() {
  const [name, setName] = useState('');

  const handlePrompt = () => {
    const userName = window.prompt("What's your name?");
    if (userName) {
      setName(userName);
    }
  };

  return (
    <div>
      <h1>Hello {name ? name : 'Guest'}!</h1>
      <button onClick={handlePrompt}>Enter Name</button>
    </div>
  );
}

export default App;
