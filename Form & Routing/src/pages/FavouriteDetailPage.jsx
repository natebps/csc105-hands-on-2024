import { useParams, useSearchParams } from "react-router-dom";

function FavouriteDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <div className="bg-white p-6 rounded-lg shadow-md w-200 ">
        <h2 className="text-2xl font-bold mb-6 text-pink-800 flex justify-center">
          Favourite Detail Page
        </h2>
        <p className="text-pink-600 text-lg ">
          Your favourite post is{" "}
          <span className="text-pink-800 font-semibold">{query}</span>. Post ID
          is <span className="text-pink-800 font-semibold">{id}</span>. Size is {" "}
          <span className="text-pink-800 font-semibold">{size}</span>.
        </p>
      </div>
    </div>
  );
}

export default FavouriteDetailPage;
