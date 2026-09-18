import { useEffect, useState } from 'react';
import type { MydevStack } from '../../dev types/devStackType';
import Technologies from './Technologies';
import YourStack from './YourStack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DevStackProps {
    devPromise: Promise<MydevStack[]>;
}

const DevStack = ({ devPromise }: DevStackProps) => {
    const [devStack, setDevStack] = useState<MydevStack[]>([]);
    const [stack, setStack] = useState<MydevStack[]>([]);

    useEffect(() => {
        devPromise.then((data) => {
            setDevStack(data);
        });
    }, [devPromise]);

    const handleAddToStack = (technology: MydevStack) => {
        const alreadyAdded = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning('Already added!');
            return;
        }

        setStack([...stack, technology]);
toast.success(`${technology.name} added to your stack!`);
    };
    const handleRemoveFromStack = (id: string) => {
    const removedItem = stack.find(item => item.id === id);

    setStack(stack.filter(item => item.id !== id));

    toast.info(`${removedItem?.name} removed from your stack!`);
};
const handleRemoveAll = () => {
    setStack([]);
    toast.info('All technologies removed from your stack!');
};


    return (
        
       <>
       <ToastContainer />
        <div className="container mx-auto">
            <div>
                <h1 className="text-3xl">
                    Explore{" "}
                    <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h1>

                <p className="text-[#64748B]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">

                <div className="lg:col-span-3">
                    <Technologies
    devStack={devStack}
    stack={stack}
    handleAddToStack={handleAddToStack}
/>
                </div>

                <YourStack stack={stack} handleRemoveFromStack={handleRemoveFromStack} handleRemoveAll={handleRemoveAll}/>

            </div>
        </div>



       </>
    );
};

export default DevStack;