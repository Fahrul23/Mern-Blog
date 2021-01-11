import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button,BlogItem,Gap} from '../../components';
import './home.scss';

function Home(props) {
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button onClick={()=> history.push('/create-blog')} title="create blog"/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className="pagination">
                <Button title="Previous"/>
                    <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    );
}

export default Home;