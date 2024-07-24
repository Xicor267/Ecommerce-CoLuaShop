import './App.scss';
import Layout from './layout/Layout';
import { LanguageProvider } from './locales/locale';

function App() {
  return (
    <LanguageProvider>

      <div className="App">
        <Layout />
      </div>
    </LanguageProvider>
  );
}

export default App;
