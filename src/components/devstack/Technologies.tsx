import type { MydevStack } from '../../dev types/devStackType';
import Cards from './Cards';

interface TechnologiesProps {
    devStack: MydevStack[];
    stack: MydevStack[];
    handleAddToStack: (technology: MydevStack) => void;
}

const Technologies = ({
    devStack,
    stack,
    handleAddToStack
}: TechnologiesProps) => {
    return (
        <div>
            <Cards
    devStack={devStack}
    stack={stack}
    handleAddToStack={handleAddToStack}
/>
        </div>
    );
};

export default Technologies;