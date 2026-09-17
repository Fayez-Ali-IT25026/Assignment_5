import { use } from 'react';
import type { MydevStack } from '../../dev types/devStackType';
import Technologies from './Technologies';

interface DevStackProps {
    devPromise: Promise<MydevStack[]>;
}

const DevStack = ({ devPromise }: DevStackProps) => {
    console.log(devPromise);
    const devStack = use(devPromise);
    console.log(devStack, "devStack");

    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-3xl'>
                    Explore the{" "}
                    <span className='bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                        Technologies
                    </span>
                </h1>

                <p className='text-[#64748B]'>
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <Technologies devStack={devStack} />
        </div>
    );
};

export default DevStack;