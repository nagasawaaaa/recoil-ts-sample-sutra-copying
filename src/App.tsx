import './App.css';
import React from 'react';
import TitleForm from "./component/TitleForm";
import AddButton from "./component/AddButton";
import SearchForm from "./component/SearchForm";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <h1>TS + Recoil 素振り</h1>
      <div>
        <TitleForm />
        <AddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
}

export default App;
