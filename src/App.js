
import './App.css';
import { HeaderP } from './pages/HeaderP'
import { Administator } from './components/admin/Administator'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import { AdminMenu } from './components/admin/AdminMenu';
import { Main } from './pages/Main'
import { Categories } from './components/Categories/Categories'
import { CategoryByUrl } from './pages/CategoryByUrl';
import { Product } from './pages/Product';
import { OrderPage } from './components/order/OrderPage'
import { Success } from './components/success/Success'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact';
import { Article } from './pages/Article';
import { ArticlePage } from './pages/ArticlePage';
import { Secutity } from './components/admin/security/Secutity';



function App() {



  return (
    <div className="App">
      <>
        <BrowserRouter>
          <AdminMenu />
          <HeaderP />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='/success' element={<Success />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/article' element={<Article />} />
            <Route path='/article/:id' element={<ArticlePage />} />
            <Route path='/categories/' element={<Categories />} exact />
            <Route path='/categories/:url' element={<CategoryByUrl />} />
            <Route path='/:url/:id' element={<Product />} />
            <Route path='/login' element={<Secutity />} />
            <Route path='/admin/*' element={<Administator />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path='/404' element={<NotFound />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
