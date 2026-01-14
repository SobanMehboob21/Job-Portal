import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance"; 

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

const UserDashBoard = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        setError("No user ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const res = await axiosInstance.get(`/api/user/${id}`);
        setUser(res.data);
      } catch (err: any) {
        console.error("Failed to fetch user:", err);
        
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }

        setError(err.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, navigate]);


  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="profile-container">
      <h1>{user.name}'s Profile</h1>
      <p><strong>Email:</strong> {user.email}</p>
      {user.role && <p><strong>Role:</strong> {user.role}</p>}
      <p><strong>ID:</strong> {user.id}</p>

      
    </div>
  );
};

export default UserDashBoard;