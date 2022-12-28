import './App.scss';
import React from 'react';
import UsersList from "./components/UsersList";
import TodosList from "./components/TodosList";


function App() {
    return (
        <div className="wrap">
            <p><a href='https://www.youtube.com/watch?v=tsCoBd7xSK8' target='_blank' rel='nofollow'>Мини-рефакторинг</a>: typescript и&nbsp;дженерики</p>
            <UsersList/>
            <TodosList/>
        </div>

    );
}

export default App;
