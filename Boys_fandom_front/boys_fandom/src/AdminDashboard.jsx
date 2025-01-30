import { useEffect, useState } from 'react';
import { useAuth } from '../src/Authcontext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5454/api/admin/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Kullanıcılar getirilemedi');
                }
                
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Hata:', error);
            }
        };

        fetchUsers();
    }, [token]);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Admin Paneli</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Çıkış Yap
                </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Kullanıcılar</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">Kullanıcı Adı</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b">
                                    <td className="px-4 py-2">{user.username}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">
                                        {user.isAdmin ? 'Evet' : 'Hayır'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;