import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Login
import Login from './pages/Login/Login';

// Admin
import AdminLayout from './pages/Admin/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminAssets from './pages/Admin/AdminAssets';
import AdminRequests from './pages/Admin/AdminRequests';
import AddAsset from './pages/Admin/AddAsset';

// Employee
import UserLayout from './pages/Employee/UserLayout';
import UserDashboard from './pages/Employee/UserDashboard';
import MyDetails from './pages/Employee/MyDetails';
import AvailableAssets from './pages/Employee/AvailableAssets';
import MyRequests from './pages/Employee/MyRequests';

import Error from './pages/Error';

import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const adminEmail = 'admin@example.com';

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        
        <Route
          path='dashboard'
          element={
            <ProtectedRoute user={user}>
              {user?.email === adminEmail ? (
                <AdminLayout>
                  <Route path='my-account' element={<MyDetails />} />
                  <Route path='my-dashboard' element={<AdminDashboard />} />
                  <Route path='requests' element={<AdminRequests />} />
                  <Route path='assets' element={<AdminAssets />} />
                  <Route path='add-asset' element={<AddAsset />} />
                </AdminLayout>
              ) : (
                <UserLayout>
                  <Route path='my-account' element={<MyDetails />} />
                  <Route path='my-dashboard' element={<UserDashboard />} />
                  <Route path='my-requests' element={<MyRequests />} />
                  <Route path='assets' element={<AvailableAssets />} />
                </UserLayout>
              )}
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
