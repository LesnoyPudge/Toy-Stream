import { FC } from "react";
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
    SingleVacancyPage,
} from './pages';



export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<IndexPage/>}/>
                    <Route path='company' element={<CompanyPage/>}/>
                    <Route path='games' element={<GamesPage/>}/>
                    <Route path='career' element={<CareerPage/>}/>
                    <Route path='career/:vacancyId' element={<SingleVacancyPage/>}/>
                    <Route path='news' element={<NewsPage />}/>
                    <Route path='contacts' element={<ContactsPage/>}/>
                    <Route path='*' element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}