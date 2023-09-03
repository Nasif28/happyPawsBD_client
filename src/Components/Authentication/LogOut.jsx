import React from "react";

const LogOut = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default LogOut;
