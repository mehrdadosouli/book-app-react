import React from 'react';
import Box from '../Box/Box';

const Body = () => {
    return (
        <div>
            <input type="text" className={StyleSheet.search} />
            <div>
                <Box />
            </div>
        </div>
    );
};

export default Body;