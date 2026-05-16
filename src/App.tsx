import { useState } from 'react';
import { Input } from './shared/components/Input';

function App() {
  const [receiver, setReceiver] = useState('asdsad');
  const [sender, setSender] = useState('asdasddsa');

  return (
    <div>
      <Input
        receiver={receiver}
        sender={sender}
        onReceiverChange={(event) => setReceiver(event.target.value)}
        onSenderChange={(event) => setSender(event.target.value)}
      />
    </div>
  );
}

export default App;
