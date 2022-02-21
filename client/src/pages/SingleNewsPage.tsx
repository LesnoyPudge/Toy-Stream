import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../components/NewsSection/data';
import { SingleNewsSection } from '../components/SingleNewsSection/SingleNewsSection';



export interface News {
    id: string;
    image: string;
    label: string;
    publishDate: string;
    shortDesc: string;
    text: string;
}

const SingleNewsPage: FC = () => {
    const { newsId } = useParams();

    const news = data.filter((item) => {
        return (item.id === newsId);
    })[0];

    return (
        <SingleNewsSection
            news={news}
        />
    );
}

export default SingleNewsPage;