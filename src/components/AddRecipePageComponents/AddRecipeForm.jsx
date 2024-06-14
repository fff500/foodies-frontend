export const AddRecipeForm = () => {
  return (
    <form>
      <div className="formGroup">
        <label htmlFor="photo">Upload a photo</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/png, image/jpeg, image/webp"
        />
      </div>
      <div className="formGroup">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="The name of the recipe"
        />
      </div>
      <div className="formGroup">
        <textarea
          id="description"
          name="description"
          placeholder="Enter a description of the dish"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" />
      </div>
      <div className="formGroup">
        <label htmlFor="ingredient">Ingredients</label>
        <select id="ingredient" name="ingredient" />
      </div>
      <div className="formGroup">
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="Enter quantity"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="preparation">Recipe Preparation</label>
        <textarea
          id="preparation"
          name="preparation"
          placeholder="Enter recipe"
        />
      </div>
      <button type="button">Clear</button>
      <button type="submit">Publish</button>
    </form>
  );
};
