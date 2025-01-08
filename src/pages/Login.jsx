import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="bg h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center border-2 border-gray-700 p-10 bg-white/40 backdrop-blur-sm border-white/20 rounded-xl md:p-20 md:w-[60%] lg:w-[50%] xl:w-[36%]"
      >
        <h1 className="text-3xl font-bold mb-10 md:mb-16 md:text-5xl lg:mb-20">
          Login
        </h1>
        <label
          htmlFor="user"
          name="username"
          className="text-lg font-semibold mb-2 md:text-2xl md:mb-4"
        >
          UserName
        </label>
        <input
          id="user"
          type="text"
          required
          className="h-8 p-2 mb-6 rounded-lg md:mb-8 md:h-10 md:w-[80%] text-center"
        />
        <label
          name="password"
          htmlFor="pass"
          className="text-lg font-semibold mb-2 md:text-2xl md:mb-4"
        >
          Password
        </label>
        <input
          id="pass"
          type="password"
          required
          className="h-8 p-2 rounded-lg mb-6 md:mb-8 md:h-10 md:w-[80%] text-center"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
