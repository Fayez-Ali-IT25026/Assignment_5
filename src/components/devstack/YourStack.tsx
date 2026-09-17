import type { MydevStack } from '../../dev types/devStackType';

interface YourStackProps {
    stack: MydevStack[];
}

const YourStack = ({ stack }: YourStackProps) => {
    return (
        <div className="border rounded-lg p-4">
            <h2 className="text-xl font-bold">
                Your Stack
            </h2>

            <p className="text-sm text-gray-500">
                {stack.length} Technology Selected
            </p>

            {stack.length === 0 && (
                <p className="text-sm text-gray-400 mt-6">
                    Your stack is empty
                </p>
            )}
        </div>
    );
};

export default YourStack;