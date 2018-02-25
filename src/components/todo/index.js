import React from "react";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";


const TodoMain = () => (
    <div>
        <BreadcrumbsItem to ='/todo'>Todo</BreadcrumbsItem>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoMain;
