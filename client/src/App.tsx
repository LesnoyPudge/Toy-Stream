import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';


const IndexPage = React.lazy(() => import('./pages/IndexPage'));
const CompanyPage = React.lazy(() => import('./pages/CompanyPage'));
const GamesPage = React.lazy(() => import('./pages/GamesPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const NewsPage = React.lazy(() => import('./pages/NewsPage'));
const ContactsPage = React.lazy(() => import('./pages/ContactsPage'));
const CareerPage = React.lazy(() => import('./pages/CareerPage'));
const SingleVacancyPage = React.lazy(() => import('./pages/SingleVacancyPage'));
const SingleNewsPage = React.lazy(() => import('./pages/SingleNewsPage'));



export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={
                        <React.Suspense fallback={<></>}>
                            <IndexPage/>
                        </React.Suspense>
                    }/>
                    <Route path='company' element={
                        <React.Suspense fallback={<></>}>
                            <CompanyPage/>
                        </React.Suspense>
                    }/>
                    <Route path='games' element={
                        <React.Suspense fallback={<></>}>
                            <GamesPage/>
                        </React.Suspense>
                    }/>
                    <Route path='career' element={
                        <React.Suspense fallback={<></>}>
                            <CareerPage/>
                        </React.Suspense>
                    }/>
                    <Route path='career/:vacancyId' element={
                        <React.Suspense fallback={<></>}>
                            <SingleVacancyPage/>
                        </React.Suspense>
                    }/>
                    <Route path='news' element={
                        <React.Suspense fallback={<></>}>
                            <NewsPage />
                        </React.Suspense>
                    }/>
                    <Route path='news/:newsId' element={
                        <React.Suspense fallback={<></>}>
                            <SingleNewsPage/>
                        </React.Suspense>
                    }/>
                    <Route path='contacts' element={
                        <React.Suspense fallback={<></>}>
                            <ContactsPage/>
                        </React.Suspense>
                    }/>
                    <Route path='*' element={
                        <React.Suspense fallback={<></>}>
                            <NotFoundPage />
                        </React.Suspense>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}