import './App.scss';
import Layout from './layout/Layout';
import { LanguageProvider } from './locales/locale';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Content } from './page/content/Content';
import { PageDetails } from './page/component/pagedetails';

function App() {
  return (
    <Router basename="/home">
      <Layout >
        <Routes>
          <Route path='page-details' index element={<PageDetails />} />
          {/* <Route path='/' index element={<Layout />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
