import React, { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import clsx from 'clsx';

import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';

import './styles/index.scss';
import { classNames } from './helpers/classNames/classNames';

export const App: React.FC = () => {
    const { theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Поменять тему</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path ='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};