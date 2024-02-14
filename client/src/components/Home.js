
import Recipe from "./Recipe";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes.length === 0 && !loading && !error ? (
        <div>
          <div className="text-center mb-4">
        <p className="text-3xl font-semibold mb-2">Oh no!</p>
        <p className="text-lg text-gray-600">It seems we couldn't find any recipe.</p>
        <p className="text-lg text-gray-600">Why not try a different search?</p>
      </div>
          <img
          src="/8791681.jpg"
          width="700"  
          height="700" 
          alt="Description of the image"
/>

          
        </div>
      ) : null}
      {loading && <p>{error ? error : "loading..."}</p>}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
