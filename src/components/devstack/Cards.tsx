import type { MydevStack } from '../../dev types/devStackType';
interface CardsProps {
  devStack: MydevStack[];
  handleAddToStack: (technology: MydevStack) => void;
}

const Cards = ({ devStack, handleAddToStack }: CardsProps) => {
    return (
        <div className="flex flex-wrap gap-4">
      {devStack.map((item) => (
        <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={item.icon} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <span className="badge badge-secondary">{item.badge}</span>
            </h2>
            <p>{item.description}</p>
            <p className="text-sm opacity-70">
              Category: {item.category} • Difficulty: {item.difficulty}
            </p>
            <div className="card-actions justify-between items-center">
              <span className="badge badge-outline">Rating: {item.rating}</span>
              <button
    onClick={() => handleAddToStack(item)}
    className="btn btn-primary"
>
    Add to Stack
</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Cards;