import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { data } from "./data";
import { NewsItem } from "./NewsItem";
import './index.scss';



export const NewsSection: FC = () => {
    return (
        <section className="news">
            <div className="container">
                <div className="news__inner">
                    <div className="news__header">
                        <SectionTitle
                            className="news"
                        >
                            Новости
                        </SectionTitle>
                    </div>

                    <div className="news__content">
                        <ul className="news__list">
                            {
                                data.map((news, index) => {
                                    return (
                                        <NewsItem
                                            key={index}
                                            news={news}
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}