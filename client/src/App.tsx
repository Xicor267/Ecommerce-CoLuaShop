import './App.scss';
import Layout from './layout/Layout';
import { Content } from './page/content/Content';
import { PageDetails } from './page/component/pagedetails';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" index element={<Content />}/> */}
          <Route path="page-details/:category" element={<PageDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
