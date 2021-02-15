import React from 'react';
import { Button, Gap } from '../../atoms';
import './BlogItem.scss';
import { useHistory } from 'react-router-dom';
function BlogItem(props) {
    const history =useHistory();
    const {image,title,name,date,body,_id} = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt=""/>
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={()=> history.push(`/detail-blog/${props._id}`)} />
            </div>
        </div>
    );
}

export default BlogItem;