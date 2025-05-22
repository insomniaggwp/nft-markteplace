import Button from "../components/Button";

const BaseTemplate = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("auth"));

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  return (
    <>
     <div className="flex p-5 text-neutral bg-primary justify-between items-center mb-4">
        <h1 className="text-display-size text-display-line font-bold">Dashboard Content Managment</h1>

        <div className="flex items-center gap-4">
          <h1 className="text-headline-size text-headline-line">{user.username}</h1>
          <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-4">
        {children}
      </div>
    </>
  )
}

export default BaseTemplate;