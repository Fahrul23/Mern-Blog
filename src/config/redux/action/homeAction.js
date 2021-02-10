import  axios  from 'axios';

export const setDataBlog = (page) => (dispatch) => {
               
        axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=4`)
        .then(result =>{
            const responseApi =result.data;

            dispatch({type: 'UPDATE_DATA_BLOG',payload : responseApi.data});
            dispatch({type:'UPDATE_PAGE',payload:{
                currenPage : responseApi.current_page,
                totalPage: Math.ceil(responseApi.total_data/responseApi.per_page)
            }})
            console.log(responseApi)
        })
        .catch(err => {
            console.log(err)
        });
    
}