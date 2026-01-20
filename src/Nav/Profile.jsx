import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../LogIn/Api";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
 

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize form values when user loads
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  if (loading) {
    return <p className="text-center mt-20 text-lg">Loading...</p>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    updateUserProfile(name, photo)
      .then(() => {
        setSuccess("Profile updated successfully!");
        setModalOpen(false);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 via-blue-500 to-white p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <img
            src={
              user?.photoURL ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRc_gq_gp7DDke-X7d0PSbESMYicKyoAAxFQ&s"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-3">
            {user?.displayName || "No Name"}
          </h2>

          <p className="text-gray-600">{user?.email}</p>
          
        </div>
      </div>

      {/* Update Profile Button */}
      <button
        className="btn btn-primary mt-4"
        onClick={() => setModalOpen(true)}
      >
        Update Profile
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Profile</h3>
            <form onSubmit={handleUpdate}>
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="label mt-2">Photo URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm mt-2">{success}</p>
              )}

              <button className="btn btn-neutral w-full mt-4">
                Update Information
              </button>
            </form>

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setModalOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
