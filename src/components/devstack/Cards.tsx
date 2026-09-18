import type { MydevStack } from '../../dev types/devStackType';
interface CardsProps {
    devStack: MydevStack[];
    stack: MydevStack[];
    handleAddToStack: (technology: MydevStack) => void;
}

const Cards = ({
    devStack,
    stack,
    handleAddToStack
}: CardsProps) => {
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {devStack.map((item) => {
    const alreadyAdded = stack.some(
        (technology) => technology.id === item.id
    );

    return (
        <div
            key={item.id}
            className="card bg-base-100 shadow-sm w-full"
        >
            <figure className="pt-4">
                <img
                    src={item.icon}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                    <span className="badge badge-secondary">
                        {item.badge}
                    </span>
                </h2>

                <p>{item.description}</p>

                <p className="text-sm opacity-70">
                    Category: {item.category} • Difficulty: {item.difficulty}
                </p>

                <div className="card-actions justify-between items-center">
                    <span className="badge badge-outline">
    ⭐ {item.rating}
</span>

                    <button
                        onClick={() => handleAddToStack(item)}
                        disabled={alreadyAdded}
                        className="btn btn-primary"
                    >
                        {alreadyAdded
                            ? '✓ Added to Stack'
                            : 'Add to Stack'}
                    </button>
                 </div>
            </div>
        </div>
    );
})}
</div>    );
};

export default Cards;