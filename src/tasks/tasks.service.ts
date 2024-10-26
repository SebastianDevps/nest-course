import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface User {
    name: String;
    age: number;
}

@Injectable()
export class TasksService{
    
    private tasks = [];

    getTasks() {
        return this.tasks
    }

    getTask(id:number) {
        const taskFound =  this.tasks.find(task => task.id === id)

        if(!taskFound){
            return new NotFoundException(`Tarea con id:${id} no encontrada`)
        }

        return taskFound
    }

    createTask(task:CreateTaskDto) {
        this.tasks.push({
            id: this.tasks.length + 1,
            ...task,
        });
        return [task];
    }
    
    updateTask(task:UpdateTaskDto) {
        return task;
    }
    
    deleteTask() {
        return 'Eliminando Tarea';
    }
    
    updateTaskStatus(){
        return 'Actualizando Tarea'
    }
}