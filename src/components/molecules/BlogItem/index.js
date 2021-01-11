import React from 'react';
import {ICFacebook} from '../../../assets';
import { Button, Gap } from '../../atoms';
import './BlogItem.scss';
import { useHistory } from 'react-router-dom';
function BlogItem(props) {
    const history =useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={ICFacebook} alt=""/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam. Porro inventore id alias dolorem nesciunt cum temporibus eius, vitae voluptatum repellat asperiores, illum in dolores obcaecati beatae aliquid similique.</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={()=> history.push('/detail-blog')} />
            </div>
        </div>
    );
}

export default BlogItem;