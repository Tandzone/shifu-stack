import { useEffect, useState } from "react";
import type { PingResponse } from "./shared/types";

function App() {
  const [message, setMessage] = useState<string>("Connexion au backend...")

  useEffect(() => {
    fetch("http://localhost:3000/ping")
      .then((response) => response.json())
      .then((data: PingResponse) => setMessage(data.status))
      .catch((error) => setMessage("Erreur de connexion au backend"))
  }, [])

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#282c34',
      color: 'white'
    }}>
      <h1>🏮 Shifu-Stack</h1>
      <p>Statut du serveur : <strong>{message}</strong></p>
    </div>
  )
}

export default App