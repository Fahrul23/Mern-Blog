import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button,BlogItem,Gap} from '../../components';
import './home.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from './../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
function Home(props) {
    const [counter,setCounter]=useState(1);
    const {dataBlog,page} = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(setDataBlog(counter))
    },[counter]);

    const previous = ()=>{
        setCounter(counter <= 1 ? 1 : counter -1)
        console.log(counter)
    }
    const next = ()=>{
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    }

    const confirmDelete = (_id) =>{
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Apakah Anda yakin akan menghapus post ini ? ',
            buttons: [
              {
                label: 'Ya',
                onClick: () => {
                    axios.delete(`http://localhost:4000/v1/blog/post/${_id}`)
                    .then(res => {
                        console.log('success delete',res.data);
                        dispatch(setDataBlog(counter))
                        
                    })
                    .catch(e => {console.log(e)})
                    
                }
              },
              {
                label: 'Tidak',
                onClick: () => alert('Click No')
              }
            ]
          });
    }

    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button onClick={()=> history.push('/create-blog')} title="create blog"/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {
                    dataBlog.map(blog =>{
                        return  <BlogItem   key={blog._id} 
                        image={`http://localhost:4000/${blog.image}`}
                        title={blog.title}
                        body={blog.body}
                        name={blog.author.name}
                        date={blog.createdAt}
                        _id={blog._id}
                        onDelete={confirmDelete}
                        />
                    })
                }

            </div>

            <div className="pagination">
                <Button title="Previous" onClick={previous}/>
                <Gap width={20}/>
                    <p className="text-page">{page.currenPage}/{page.totalPage}</p>
                <Gap width={20}/>    
                <Button title="Next" onClick={next}/>
            </div>
            <Gap height={20}/>
        </div>
    );
}

export default Home;