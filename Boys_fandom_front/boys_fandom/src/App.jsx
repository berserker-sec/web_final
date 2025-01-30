import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Home";
import Characters from "./Characters";
import S1 from "./S1";
import S2 from "./S2";
import S3 from "./S3";
import S4 from "./S4";
import Biography from "./Biography";
import Login from "./Login";
import { AuthProvider } from './Authcontext';
// AdminRoute ve admin sayfalarını import edin
import AdminRoute from '../src/AdminRoute';
import AdminDashboard from '../src/AdminDashboard';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/char" element={<Characters />} />
            <Route path="/char/:id" element={<Biography />} />
            <Route path="/login" element={<Login />} />
            <Route path="/s1" element={<S1 />} />
            <Route path="/s2" element={<S2 />} />
            <Route path="/s3" element={<S3 />} />
            <Route path="/s4" element={<S4 />} />
            
            {/* Admin rotaları */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;