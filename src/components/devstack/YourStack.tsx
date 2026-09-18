import type { MydevStack } from '../../dev types/devStackType';


interface YourStackProps {
    stack: MydevStack[];
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
}

const YourStack = ({
    stack,
    handleRemoveFromStack,
    handleRemoveAll
}: YourStackProps) => {
    return (
        <div className="border rounded-lg p-5 shadow-sm">
            <h2 className="text-2xl font-bold">
                Your Stack
            </h2>

            <p className="text-sm text-gray-500">
                {stack.length} Technology Selected
            </p>
            <button
    onClick={handleRemoveAll}
    className="btn btn-sm btn-error mt-3"
>
    Remove All
</button>

            {stack.length === 0 && (
                <p className="text-sm text-gray-400 mt-6">
                    Your stack is empty
                </p>
            )}

            <div className="mt-4 space-y-3">
                {stack.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-3 border rounded-lg p-3"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-10 h-10 object-contain"
                        />

                        <div>
                            <h3 className="font-semibold">
                                {item.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {item.category}
                            </p>
                        </div>
                       <button
    onClick={() => handleRemoveFromStack(item.id)}
    className="btn btn-sm btn-error"
>
    ✕
</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YourStack;