function switch_task_type() {
    let task_type = document.getElementById('task-type-id').value;

    if (task_type === 'linear') {
        document.getElementById('linear-task').style.display = 'block';
        document.getElementById('non-linear-prod-radio-id').style.display = 'none';
    } else if (task_type === 'non-linear') {
        document.getElementById('linear-task').style.display = 'none';
        document.getElementById('non-linear-prod-radio-id').style.display = 'block';
    }
}

// Attach the event listener to the dropdown to trigger the change immediately
document.getElementById('task-type-id').addEventListener('change', switch_task_type);

// Initial call to set visibility based on default dropdown value (optional but useful)
switch_task_type();
