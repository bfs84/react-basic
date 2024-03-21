import { useEffect, useState } from 'react';
import { PublishButton, Title, Content } from './index';

const Article = (props) => {
    const [published, setPublished] = useState(false);

    const togglePublished = () => {
        setPublished(prevState => !prevState);
    }

    //クリーンアップ処理がうまくできていないので宿題
    useEffect(() => {
        console.log('Your article state is', published);
        if (published) {
            console.log('公開してて偉い！');
        }
        return () => {
            console.log('死にます...');
        }
    }, [published]);

    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishButton isPublished={published} onClick={togglePublished} />
        </div>
    );
};

export default Article;