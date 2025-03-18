import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Navbar from "./../components/Navbar";

const favouritesSchema = z.object({
  number: z
    .number()
    .min(1, "Number must be at least 1")
    .max(100, "Number must be at most 100"),
  query: z.enum(["love", "like"]),
  size: z.enum(["small", "medium", "large"]),
});

function FavouritesPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(favouritesSchema) });

  const onSubmit = (data) => {
    const { number, query, size } = data;
    navigate(`/fav/${number}?q=${query}&size=${size}`);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
        <h2 className="text-2xl font-bold mb-6 text-pink-800">This is the Favourites Page.</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-80">
          <div className="mb-4">
            <label className="block text-pink-600">Number (1-100):</label>
            <input
              type="number"
              {...register("number", { valueAsNumber: true })}
              className="w-full p-2 border border-pink-300 rounded mt-1"
            />
            {errors.number && (
              <p className="text-pink-800 text-sm mt-1">{errors.number.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-pink-600">Query Parameter (q):</label>
            <select {...register("query")} className="w-full p-2 border border-pink-300 rounded mt-1">
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {errors.query && (
              <p className="text-pink-800 text-sm mt-1">{errors.query.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-pink-600">Size Parameter (size):</label>
            <select {...register("size")} className="w-full p-2 border border-pink-300 rounded mt-1">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && (
              <p className="text-pink-800 text-sm mt-1">{errors.size.message}</p>
            )}
          </div>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-800">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FavouritesPage;
