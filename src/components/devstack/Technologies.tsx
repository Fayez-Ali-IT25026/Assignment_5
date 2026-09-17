import type { MydevStack } from '../../dev types/devStackType';
import Cards from './Cards';

interface TechnologiesProps {
  devStack: MydevStack[];
   handleAddToStack: (technology: MydevStack) => void;
}

const Technologies = ({
    devStack,
    handleAddToStack
}: TechnologiesProps) => {
  console.log(devStack, 'Technologies');

  return (
    <div>
<Cards devStack={devStack} handleAddToStack={handleAddToStack}/>
    </div>
  );
};

export default Technologies;