import React, {FC} from 'react';
import {ChildComponentProps, ITodo} from "../interfaces";
import withFetch from "../hoc/withFetch";

const TodosList: FC<ChildComponentProps<ITodo[], 'title'>> = ({data, query, fieldName}) => {
    return (
        <ol>
            {data.filter((el: ITodo) => el[fieldName].toLowerCase().indexOf(query.toLowerCase()) >= 0).map((el: ITodo) => {
                return (
                    <li key={el.id}>{el[fieldName]}</li>
                )
            })}
        </ol>
    );
};

export default withFetch(TodosList, 'todos');
