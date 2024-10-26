import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
export class TaskController{
    // FORMA 1:
    // tasksService:TasksService;

    // constructor(tasksService:TasksService) {
    //     this.tasksService = tasksService;
    // }

    // FORMA 2:
    constructor(private tasksService:TasksService){}

    @ApiTags('tasks')
    @Get()
    getAllTasks(@Query() query:any) {
        // console.log(query)
        return this.tasksService.getTasks();
    }
    
    @ApiTags('tasks')
    @Get('/:id')
    getTask(@Param('id') id:string) {
        return this.tasksService.getTask(parseInt(id));
    }

    @ApiTags('tasks')
    @Post()
    // @UsePipes(new ValidationPipe()) //Para que se tomen las validaciones del dto
    createTask(@Body() task:CreateTaskDto) {
        return this.tasksService.createTask(task);
    }
    
    @ApiTags('tasks')
    @Put()
    updateTask(@Body() task:UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }
    
    @ApiTags('tasks')
    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }
    
    @ApiTags('tasks')
    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }
}