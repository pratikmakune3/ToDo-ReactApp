var React = require('react');
var ReactDOM = require('react-dom');
var ToDoItem = require('./todoItem');

//Module Require
require('./css/index.css');
var AddItem = require('./addItem');

// create component
var ToDoComponent = React.createClass({

    getInitialState: function(){
        return {
            todos : ['Complete React Tutorials','Make a react to-do app','Get a bike Serviced'],
        }

    }, //define initial state of the component inside the component itself

    render : function (){

        var todos = this.state.todos;       // var todos = contain local version of todos data declared inside initial state
        var todos = todos.map(function(item, index){
                return (
                    <ToDoItem item={item} key={index} onDelete = {this.onDelete} />
                );
        }.bind(this));

        return (
            <div>
                <p>The Busiest people have the most leisure...</p>
                <ul> {todos} </ul>
                <AddItem onAddItem = {this.onAddItem}/>
            </div>
        )
    }, // render

    onDelete : function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });

        this.setState({
            todos : updatedTodos
        });
    },

    onAddItem : function(item){
        var todos = this.state.todos;
        todos.push(item);
        this.setState({
            todos : todos
        });
    }

});

ReactDOM.render(<ToDoComponent /> , document.getElementById('todo-wrapper'));