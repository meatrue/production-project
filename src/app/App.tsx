import React, { Suspense } from 'react';

import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/Router';

export const App: React.FC = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="page-content">
                <Sidebar />
                <div className="page-wrapper">
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    </div>
);
