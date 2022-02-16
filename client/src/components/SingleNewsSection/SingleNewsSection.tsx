import { FC } from "react";
import { News } from "../../pages/SingleNewsPage";
import { NextPageButton } from "../NextPageButton/NextPageButton";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import parse from 'html-react-parser';
import './index.scss';
import { PublishDate } from "../PublishDate/PublishDate";



interface ISingleNewsSectionProps {
    news: News
}

export const SingleNewsSection: FC<ISingleNewsSectionProps> = ({news}) => {
    const {
        image = news.image,
        label = news.label,
        publishDate = news.publishDate,
        text = news.text,
    } = news;

    return (
        <section className="single-news">
            <div className="container">
                <div className="single-news__inner">
                    <div className="single-news__header">
                        <SectionTitle
                            className="single-news"
                        >
                            Новость
                        </SectionTitle>

                        <NextPageButton
                            className="single-news"
                            position="down"
                            direction="left"
                            to="/news"
                        >
                            Назад
                        </NextPageButton>
                    </div>

                    <div className="single-news__content">
                        <img 
                            className="single-news__image" 
                            src={"../images/" + image + ".jpg"} 
                            alt={label} 
                        />
                        
                        <PublishDate
                            publishDate={publishDate}
                            className="single-news"
                        />

                        <div className="single-news__label">
                            {label}
                        </div>

                        <div className="single-news__text">
                            {parse(text)}
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
}