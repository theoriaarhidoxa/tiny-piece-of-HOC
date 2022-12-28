import React, {FC} from 'react';
import {ChildComponentProps, IUser} from "../interfaces";
import withFetch from "../hoc/withFetch";

const UsersList: FC<ChildComponentProps<IUser[], 'name'>> = ({data, query, fieldName}) => {
    return (
        <ol>
            {data.filter((el: IUser) => el[fieldName].toLowerCase().indexOf(query.toLowerCase()) >= 0).map((el: IUser) => {
                return (
                    <li key={el.id}>{el[fieldName]}</li>
                )
            })}
        </ol>
    );
};

export default withFetch(UsersList, 'users');
