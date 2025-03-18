import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log("Login successful:", data);
    navigate("/");
  };

  return (
    <div className="flex justify-center m-10 min-h-screen">
      <div className="w-[400px] h-[300px] bg-white flex-col p-10 rounded-2xl shadow-lg">
        <h2 className="flex justify-center font-bold m-1 text-2xl">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
          <div className="flex gap-2 py-2">
            <label>Email:</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className=" border-s-pink-600 w-[200px] bg-pink-200"
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div className="flex gap-2 py-2">
            <label>Password:</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className=" border-s-pink-600 w-[200px] bg-pink-200"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>
          <div className="flex justify-center m-2 h-[24px]">
            <button
              type="submit"
              className="w-[150px] h-[24px] bg-pink-300 rounded-2xl flex justify-center hover:bg-white hover:border-s-pink-300 hover:border-2"
            >
              Login
            </button>
          </div>
        </form>
          
        <p className="py-5">
          Don't have an account? <a href="/signup" className="font-bold text-pink-600">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
