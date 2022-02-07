import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import {
    IndexPage,
    CompanyPage,
    GamesPage,
    NotFoundPage,
    NewsPage,
    ContactsPage,
    CareerPage,
} from './pages';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<IndexPage />} />
                    <Route path='company' element={<CompanyPage />} />
                    <Route path='games' element={<GamesPage />} />
                    <Route path='career' element={<CareerPage />} />
                    <Route path='news' element={<NewsPage />} />
                    <Route path='contacts' element={<ContactsPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
