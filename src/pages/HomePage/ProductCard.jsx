import { useCartContext } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ id, name, brand, image, feminine, price }) => {
  const { addToCart } = useCartContext();
  return (
    <article className="card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg">
      <img
        src={image}
        alt={`Imagem do produto ${id}`}
        className="group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-300"
      />
      <div className="mx-4 space-y-1">
        <p className="text-xs uppercase tracking-wide text-slate-500">{brand}</p>
        <p className="text-base font-medium text-gray-900">{name}</p>
        <p className="text-sm font-semibold text-green-600">
          {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>
      </div>

      <button
        className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800"
        onClick={() => addToCart(id)}
      >
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </article>
  );
};

export default ProductCard;
