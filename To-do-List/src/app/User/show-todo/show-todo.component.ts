import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-show-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-todo.component.html',
  styleUrl: './show-todo.component.css'
})
export class ShowTodoComponent implements OnInit {
  todoList: any[] = []; // Define a variable to store the todo list

  apiUrl = 'http://localhost:5000/ShowToDo/'; // Replace with your actual API endpoint


  ngOnInit() {
    // Call a method to fetch the todo list when the component is initialized
    this.getTodoList();
  }

  getTodoList() {

    // Make an HTTP GET request to the API endpoint
    axios.get(this.apiUrl)
      .then(response => {
         this.todoList = response.data
          
      })
      .catch(error => {
        console.error('API error:', error);
      });
  }
}


