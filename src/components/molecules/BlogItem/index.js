import React from 'react';
import { Button, Gap } from '../../atoms';
import './BlogItem.scss';
import './styleblogitem.css';
import { useHistory } from 'react-router-dom';
function BlogItem(props) {
    const history =useHistory();
    const {image,title,name,date,body,_id} = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt=""/>
            <div className="content-detail">
                <div classname="title-wrapper title-action">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={()=> history.push(`/create-blog/${_id}`)}>Edit</p>|
                        <p className="delete">delete</p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={()=> history.push(`/detail-blog/${props._id}`)} />
            </div>
        </div>
    );
}

export default BlogItem;