import React, {useEffect, useState} from 'react';

const withFetch = (Component: React.ElementType, dataType: string) => {
    return function () {
        const [data, setData] = useState([]);
        const [query, setQuery] = useState('');
        const f = dataType === 'users' ? 'name' : 'title';

        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${dataType}?_limit=10`);
            const data = await response.json();
            setData(data);
        };

        useEffect(() => {
            fetchData().then();
        }, []);

        return (
            <div className='wrap__block'>
                <input type='search' placeholder='find...' value={query} onChange={e => setQuery(e.target.value)} />
                <Component data={data} query={query} dataType={dataType} fieldName={f} />
            </div>
        )
    }
};

export default withFetch;
