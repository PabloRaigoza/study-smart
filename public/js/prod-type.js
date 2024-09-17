function switch_task_type() {
    let task_type = document.getElementById('task-type-id').value;
    if (task_type === 'linear') {
        document.getElementById('linear-task').style.display = 'block';
        document.getElementById('nonlinear-task').style.display = 'none';
    } else {
        document.getElementById('linear-task').style.display = 'none';
        document.getElementById('nonlinear-task').style.display = 'block';
    }
}