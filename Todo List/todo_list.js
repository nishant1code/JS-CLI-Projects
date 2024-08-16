// ******************* SIMPLE TO DO LIST APPLICATION *********************

// ******* GLOBAL ARRAYS ******

// assignedTasks - Array to store all the assigned tasks.
let assignedTasks = [
    {
        task: "dummy",
        taskDescription: "dummy desc - this property contains description of the assigned task."
    }
];

// completedTasks - Array to store marked completed tasks.
let completedTasks = [
    {
        task: "dummy",
        taskDescription: "dummy desc - this property contains completed task description."
    }
];

// deletedTasks - Array to store all the deleted tasks.
let deletedTasks = [
    {
        task: "dummy",
        taskDescription: "dummy desc - this property contains deleted task description."
    }
];

// ******* FUNCTIONS ******
// **** LIST ALL TASK FUNCTION ****
function listAllTasks(){
    // exitListAllTasks - Variable containing boolean value, used for condtion in while loop to exit or not.
    let exitListAllTasks = false;
    
    // tasksToList - Varaible used to prompt and ask user about listing of tasks.
    let tasksToList = '';

    // 
    let taskNumber = 0;

    while(!exitListAllTasks){
        tasksToList = prompt("Type '1' to list all the tasks\nType '2' to list only assigned tasks\nType '3' to list only completed tasks\nType '4' to list only deleted tasks.");
        taskNumber++;
        
        switch(tasksToList.trim()){
            // for all tasks - assigned, completed, deleted.
            case '1':
                document.write("<h2>Tasks Assigned:-</h2>");
                assignedTasks.forEach((tasksIndex) =>{
                    if(tasksIndex.task!=='dummy'){
                        console.log(taskNumber);
                        document.write(`<h3>Task ${taskNumber} - ${tasksIndex.task}</h3><h4>  Task ${taskNumber} Description - ${tasksIndex.taskDescription}</h4><br>`);
                    }
                });
                document.write("<h2>Completed Tasks:-</h2>");
                completedTasks.forEach((tasksIndex) =>{
                    if(tasksIndex.task!=='dummy'){
                        document.write(`<h3>Task ${taskNumber} - ${tasksIndex.task}</h3><h4>  Task ${taskNumber} Description - ${tasksIndex.taskDescription}</h4><br>`);
                    }
                });
                document.write("<h2>Deleted Tasks:-</h2>");
                deletedTasks.forEach((tasksIndex) =>{
                    if(tasksIndex.task!=='dummy'){
                        document.write(`<h3>Task ${taskNumber} - ${tasksIndex.task}</h3><h4>  Task ${taskNumber} Description - ${tasksIndex.taskDescription}</h4><br>`);
                    }
                });
                exitListAllTasks = true;
                break;
            // only for assigned tasks
            case '2':
                document.write("<h2>Tasks Assigned:-</h2>");
                assignedTasks.forEach((tasksIndex) =>{
                    if(tasksIndex.task!=='dummy'){
                        document.write(`<h3>Task ${taskNumber} - ${tasksIndex.task}</h3><h4>  Task ${taskNumber} Description - ${tasksIndex.taskDescription}</h4><br>`);
                    }
                });
                exitListAllTasks = true;
                break;
            // only for completed tasks
            case '3':
                document.write("<h2>Completed Tasks:-</h2>");
                completedTasks.forEach((tasksIndex) =>{
                    if(tasksIndex.task!=='dummy'){
                        document.write(`<h3>Task ${taskNumber} - ${tasksIndex.task}</h3><h4>  Task ${taskNumber} Description - ${tasksIndex.taskDescription}</h4><br>`);
                    }
                });
                exitListAllTasks = true;
                break;
            // only for delted tasks
            case '4':
                document.write("<h2>Deleted Tasks:-</h2>");
                deletedTasks.forEach((tasksIndex) =>{
                    if(tasksIndex.task!=='dummy'){
                        document.write(`<h3>Task ${taskNumber} - ${tasksIndex.task}</h3><h4>  Task ${taskNumber} Description - ${tasksIndex.taskDescription}</h4><br>`);
                    }
                });
                exitListAllTasks = true;
                break;
            default:
                alert("Please enter correct option.");
                break;
        }
        
    }
}

// **** ADD TASKS FUNCTION ****
function addTasks(){
    let exitAddinTasks = false;
    
    let wantToAddTask = '';

    while(!exitAddinTasks){
        wantToAddTask = prompt("Type '1' to add task\nType '2' not add task and exit.");
        if(wantToAddTask.trim()==='1'){
            assignedTasks.push({
                task: prompt("Enter task name","dummy"),
                taskDescription: prompt("Enter task description","")
            });
            alert("Successfully assigned task.");
        }
        else if(wantToAddTask.trim()==='2'){
            exitAddinTasks = true;
        }
        else{
            alert("Type the correct choice");
        }
    }
}

// **** REMOVE TASKS FUNCTION ****
function removeTask(){
    let exitDeleteTask = false;

    let wantToDeleteTask = '';

    let taskNameToDelte = '';
    
    while(!exitDeleteTask){
        wantToDeleteTask = prompt("Type '1' to delete task\nType '2' exit and not delete task.");
        
        if(wantToDeleteTask.trim()==='1'){
            taskNameToDelte = prompt("Enter the task name to delte the task.");
            assignedTasks.forEach((t,index) => {
                if(t["task"].toLowerCase().trim()===taskNameToDelte.toLowerCase().trim()){
                    deletedTasks.push(t);
                    assignedTasks.splice(index,1);
                    alert("Successfully Deleted Task.");
                }
            });
        }
        else if(wantToDeleteTask.trim()==='2'){
            exitDeleteTask = true;
        }
        else{
            alert("Enter correct option.");
        }
    }
}

// **** COMPLETE TASKS FUNCTION ****
function markTaskCompleted(){
    let exitMarkingTaskComplete = false;

    let wantToMark = '';

    let nameOfTaskToMarkComplete = '';

    while(!exitMarkingTaskComplete){
        wantToMark = prompt("Type '1' to mark task complete\nType '2' to exit marking task as completed.");
        if(wantToMark.trim()==='1'){
            nameOfTaskToMarkComplete = prompt("Enter the name of task to mark complete.");
            assignedTasks.forEach((t,index) => {
                if(t["task"].toLowerCase().trim()===nameOfTaskToMarkComplete.toLowerCase().trim()){
                    completedTasks.push(t);
                    assignedTasks.splice(index,1);
                    alert("Horrah! You completed the task.");
                }
            });
        }
        else if(wantToMark.trim()==='2'){
            exitMarkingTaskComplete = true;
        }
        else{
            alert("Type the correct option");
        }
    }
}

// **** PROGRAM FLOW FUNCTION ****
function myToDoList(){
    let exitMyToDoList = false;

    let usersChoice = '';

    while(!exitMyToDoList){
        alert("Welcomet to my simple To Do List application.")
        usersChoice = prompt("Type '1' to add task.\nType '2' to mark the completed tasks.\nType '3' to delete tasks.\nType '4' to view tasks.\nType '5' to exit to do list.");

        switch(usersChoice.trim()){
            case '1':
                addTasks();
                break;
            case '2':
                markTaskCompleted();
                break;
            case '3':
                removeTask();
                break;
            case '4':
                listAllTasks();
                exitMyToDoList = true;
                break;
            case '5':
                exitMyToDoList = true;
                break;
            default:
                alert("Enter a valid option.");
                break;
        }
    }
    document.write("Thank you for using the application. I am glad that you gave some time to test my application.");
}

myToDoList();