import React from 'react';
import { ICYoutube } from '../../assets';
import { Gap, Link } from '../../components';
import './detailblog.scss';
import { useHistory } from 'react-router-dom';
function DetailBlog(props) {
    
    const history = useHistory();

    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={ICYoutube} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, numquam deleniti. Illo nam porro voluptates voluptatum nisi deserunt? Illum eius labore tenetur repellat impedit obcaecati nostrum cum suscipit veritatis. Minima!</p>
            <Gap height={20} />
            <Link title="Kembali Ke Home"  onClick={()=> history.push('/')}/>
        </div>
    );
}

export default DetailBlog;