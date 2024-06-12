import { Suspense } from 'react';

import { AppRouter } from './providers/Router';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

export const App: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />      
                <div className='page-content'>
                    <Sidebar />
                    <div className='page-wrapper'>
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};