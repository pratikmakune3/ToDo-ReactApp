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

        var todoslist = this.state.todos;       // var todos = contain local version of todos data declared inside initial state
        var newTodos = todoslist.map(function(item){
                console.log(item);
                return (
                    <li> {item} </li>
                );
        });

        return (
            <div>
                <p>The Busiest people has the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>
                    {newTodos}
                </ul>
            </div>
        )
    } // render
});

ReactDOM.render(<ToDoComponent /> , document.getElementById('todo-wrapper'));