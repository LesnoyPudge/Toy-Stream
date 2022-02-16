import { FC } from "react";
import { Link } from "react-router-dom";
import { News } from "../../pages/SingleNewsPage";
import { PublishDate } from "../PublishDate/PublishDate";



interface INewsItemProps {
    news: News;
}

export const NewsItem: FC<INewsItemProps> = ({news}) => {
    const {
        id = news.id,
        image = news.image,
        label = news.label,
        publishDate = news.publishDate,
        shortDesc = news.shortDesc,
    } = news;
    
    return (
        <li className="news__news-item news-item">
            <Link to={id}>
                <div className="news-item__inner">
                    <div className="news-item__header">
                        <img 
                            className="news-item__image" 
                            src={"./images/" + image + ".jpg"} 
                            alt={label} 
                        />
                    </div>

                    <div className="news-item__content">
                        <PublishDate
                            publishDate={publishDate}
                            className="news-item"
                        />

                        <h3 className="news-item__label">
                            {label}
                        </h3>

                        <div className="news-item__text">
                            <p>
                                {shortDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}