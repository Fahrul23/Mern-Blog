import React from 'react';
import {Button, Gap, Input, Link, TextArea, Upload} from '../../components';
import './createblog.scss';
import { useHistory } from 'react-router-dom';
function CreateBlog(props) {
    const history =useHistory();
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={()=> history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title"/>
            <Upload />
            <TextArea />
            <Gap  height={20}/>
            <div className="button-action">
                <Button title="Save"/>
            </div>
            <Gap  height={150}/>
        </div>
    );
}

export default CreateBlog;