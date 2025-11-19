import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OpportunityListPage from './pages/OpportunityListPage';
import OpportunityDetailPage from './pages/OpportunityDetailPage';
import PostOpportunityPage from './pages/PostOpportunityPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MyPostingsPage from './pages/MyPostingsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="opportunities" element={<OpportunityListPage />} />
          <Route path="opportunity/:id" element={<OpportunityDetailPage />} />
          <Route path="post" element={<PostOpportunityPage />} />
          <Route path="my-postings" element={<MyPostingsPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
