import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button,BlogItem,Gap} from '../../components';
import './home.scss';
import Axios from 'axios';

function Home(props) {

    const [dataBlog, setDataBlog]= useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=4')
        .then(result =>{
            console.log(result.data)
            const responseApi =result.data;
            setDataBlog(responseApi.data);
        })
        .catch(err => console.log(err));

    },[]);


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
                        />
                    })
                }

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