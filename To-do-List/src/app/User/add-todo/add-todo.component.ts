import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

interface Todo {
  todoText: string;
  todocar: string;
}

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent implements OnInit {
  todoForm!: FormGroup;
  apiUrlPost = 'http://localhost:5000/AddToDo/'; // Replace with your actual API endpoint
  apiUrlGet = 'http://localhost:5000/ShowToDo/'; // Replace with your actual API endpoint

  todoList: any[] = []; // Define a variable to store the todo list

  constructor(private fb: FormBuilder) { }




  ngOnInit() {
    this.todoForm = this.fb.group({
      todoText: ['', Validators.required]
    });
    this.getTodoList();

  }

  getTodoList() {

    // Make an HTTP GET request to the API endpoint
    axios.get(this.apiUrlGet)
      .then(response => {
         this.todoList = response.data
          
      })
      .catch(error => {
        console.error('API error:', error);
      });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const todoObject: Todo = {
        todoText: this.todoForm.value.todoText,
        todocar: this.todoForm.value.todoText // Example; replace with actual property
      };

      axios.post(this.apiUrlPost, todoObject)
        .then(response => {
          console.log('API response:', response.data); // Access the data using response.data
          // You can perform additional logic with the API response here
        })
        .catch(error => {
          console.error('API error:', error);
        });
    }
  }

}
