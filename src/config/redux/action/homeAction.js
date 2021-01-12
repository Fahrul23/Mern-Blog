import  axios  from 'axios';

export const setDataBlog = () =>{
    return (dispatch)=>{
               
        axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=4')
        .then(result =>{

            const responseApi =result.data;

            dispatch({type: 'UPDATE_DATA_BLOG',payload : responseApi.data});
        })
        .catch(err => console.log(err));
    }

}