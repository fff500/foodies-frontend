import { RecipePreview } from "../RecipePreview";
import { UserCard } from "../UserCard";

export const ListItems = ({ type, items }) => {
  return (
    <>
      {type === "recipes" && items.length > 0 && (
        <div>
          {items.map((recipe) => (
            <RecipePreview key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
      {(type === "following" || type === "followers") && items.length > 0 && (
        <div>
          {items.map((user) => (
            <UserCard key={user.email} user={user} type={type} />
          ))}
        </div>
      )}
      {items.length === 0 && <p>No items found</p>}
    </>
  );
};
