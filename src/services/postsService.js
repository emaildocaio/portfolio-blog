import dataList from '../json/data.json'

export const getPost = () => dataList;

export const getPostById = ( id ) => {
    const dataListFind = dataList.find( (item) => {
        return item.id.toString() === id
    })
    return dataListFind || {};
} 
