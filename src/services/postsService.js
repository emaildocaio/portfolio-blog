import axios from '../axios/axios';
import dataList from '../json/data.json';

export const getAllPosts = () => axios.get('/pics');

export const getPostById = ( id ) => {
    // const dataListFind = dataList.find( (item) => {
    //     return item.id.toString() === id
    // })
    axios.get(`/pics/${id}`);
} 
