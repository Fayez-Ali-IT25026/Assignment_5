import type { MydevStack } from '../../dev types/devStackType';
import Cards from './Cards';

interface TechnologiesProps {
  devStack: MydevStack[];
}

const Technologies = ({ devStack }: TechnologiesProps) => {
  console.log(devStack, 'Technologies');

  return (
    <div>
<Cards devStack={devStack}/>
    </div>
  );
};

export default Technologies;