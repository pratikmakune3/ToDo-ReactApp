var React = require('react');
var ReactDOM = require('react-dom');

// create component
var ToDoComponent = React.createClass({

    getInitialState: function(){
        return {
            todos : ['Complete React Tutorials','Make a react to-do app','Get a bike Serviced'],

        }

    }, //define initial state of the component inside the component itself

    render : function (){

        var todos = this.state.todos;       // var todos = contain local version of todos data declared inside initial state
not 
        var todos = todos.map(function(item, index){
                return (
                    <ToDoItem item={item} key={index} onDelete = {this.onDelete} />
                );
        }).bind(this);

        return (
            <div>
                <p>The Busiest people have the most leisure...</p>
                <ul>
                    {todos}
                </ul>
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
    }

});

var ToDoItem = React.createClass({
    render : function(){
        return (
            <li>
                <div className = 'todo-item'>
                    <span className = 'item-name'>{this.props.item}</span>
                    <span className = 'item-delete' onClick = {this.handleDelete}> x </span>
                </div>
            </li>
        );
    }, // render

    handleDelete : function(){
        this.props.onDelete(this.props.item);
    }
})

ReactDOM.render(<ToDoComponent /> , document.getElementById('todo-wrapper'));