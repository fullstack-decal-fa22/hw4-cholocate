import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [list, setList] = useState([])
    /* Use the map() function to render multiple Blocks! */
    const posts = list.map((item) => <Block color = {item} caption = {item}></Block>); // TODO: edit this variable
    
    const handleClick = (color) => {
        setList(posts => [color, ...posts])
    };
    
    return (
        <div>

            <Menu handleClick={handleClick}></Menu>
            {posts}

        </div>
    );
}

export default Feed;