import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header';
import './index.css';

function App() {
  return (
    <div className='relative'>
      <Header />
      <a className='flex text-3xl'>say 333333 </a>say hi
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
