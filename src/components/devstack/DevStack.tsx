import { useEffect, useState } from 'react';
import type { MydevStack } from '../../dev types/devStackType';
import Technologies from './Technologies';
import YourStack from './YourStack';

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
            alert('Already added!');
            return;
        }

        setStack([...stack, technology]);
    };
    const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter(item => item.id !== id));
};


    return (
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
                        handleAddToStack={handleAddToStack}
                    />
                </div>

                <YourStack stack={stack} handleRemoveFromStack={handleRemoveFromStack}/>

            </div>
        </div>
    );
};

export default DevStack;