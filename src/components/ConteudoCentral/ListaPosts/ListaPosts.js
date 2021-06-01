
import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import './ListaPosts.css'
import Post from './Post/Post';
import dataList from '../../../json/data.json'

const ListaPosts = () => {
    console.log(dataList)

    dataList.map((item) => {
        console.log(item.image)
    })
    return (
        <div className="grid">
            <GridList cellHeight={300} cols={4}>
                {dataList.map((item) => (
                <GridListTile key={item.image} cols={item.cols || 1}>
                    <a href="#"><img src={item.image} alt={item.title}/></a>
                </GridListTile>
            ))}
            </GridList>
        </div>
    );
};

export default ListaPosts;