function Button({ filteredFurniture }) {
  return (
    <div className="buttons">
      <button className="change" onClick={() => filteredFurniture("couch")}>
        Couches
      </button>
      <button className="change" onClick={() => filteredFurniture("bedroom")}>
        Bedrooms
      </button>
      <button className="change" onClick={() => filteredFurniture("kitchen")}>
        Kitchen
      </button>
      <button className="change" onClick={() => filteredFurniture("office")}>
        Office
      </button>
      <button className="change" onClick={() => filteredFurniture(null)}>
        {" "}
        Show all{" "}
      </button>
    </div>
  );
}

export default Button;
