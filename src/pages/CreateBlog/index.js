import React, { useEffect, useState } from 'react';
import {Button, Gap, Input, Link, TextArea, Upload} from '../../components';
import './createblog.scss';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setForm, setImgPreview } from './../../config/redux/action';
import { postToApi, updateToApi } from './../../config/redux/action/createBlogAction';


function CreateBlog(props) {
    
    const {form,imgPreview} = useSelector(state => state.createBlogReducer);
    const {title,body} = form;
    const [isUpdate,setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const history =useHistory();

    useEffect(()=>{
        const id = props.match.params.id;
        if(id){
            setIsUpdate(true);
            axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res =>{
                const data = res.data.data;
                dispatch(setForm('title',data.title))
                dispatch(setForm('body',data.body))
                dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
            })
        }
    })


    const onSubmit=()=>{
        const id = props.match.params.id;
        if(isUpdate){
            updateToApi(form,id)
        }else{
        postToApi(form)
        }
    }
    const updateInput= (e) =>{
        console.log(e.target.value)
    }

    const onImageUpload =(e) =>{
        const file = e.target.files[0]; 
        dispatch(setForm('image',file));
        dispatch(setImgPreview(URL.createObjectURL(file)));
    }

    return (
        <div className="blog-post">
            <Link title="kembali" onClick={()=> history.push('/')} />
            <p className="title">{isUpdate ? 'Update Blog Post' : 'Create New Blog Post' }</p>
            <Input label="Post Title" value={title} onChange={(e)=> updateInput(e)}/>
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} />
            <Gap  height={20}/>
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
            </div>
            <Gap  height={150}/>
        </div>
    );
}

export default withRouter(CreateBlog);