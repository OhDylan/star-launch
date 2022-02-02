import React, { useState } from 'react';
import { Input, Button } from 'antd';
// Use input from antd

const SearchBar = ({query, setQuery}) => {

    const [value, setValue] = useState('')
    
    const search = () => {
        setQuery(value)
    }

    return (
        <Input.Group compact>
            <Input style={{ width: '35%', padding: 10, height: 45 }} defaultValue="https://api.spacexdata.com/v4/launchpads/" disabled />
            <Input style={{ width: '25%', padding: 10, height: 45 }} placeholder='Paste the launch pad id here' onChange={e => setValue(e.target.value)} />
            <Button onClick={search} style={{ width: '10%', padding: 10, height: 45 }} type="primary">Search</Button>
        </Input.Group>
    );
};

export default SearchBar;
