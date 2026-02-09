import data from "../../data";
import { useNavigate } from "react-router-dom";
function Recipes() {
  const nav = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      {data.recipes.map((v, i) => {
        return (
          <div
            key={i}
            style={{
              width: "220px",
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
            onClick={()=>{nav(`${v.id}`)}}
          >
            <h1
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {v.name}
            </h1>

            <img
              src={v.image}
              alt={v.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Recipes;
