import React from 'react';

const Task = (props) => {
	const { id, name, isFinished } = props;

	const handleClick = (e) => {
		switch (e.detail) {
			case 2:
				handleActionButton({ type: 'done', id: e.target.dataset.id });
				break;
		}
	};

	const handleActionButton = (buttonValues) => {
		props.onActionButtonClick(buttonValues);
	};

	return (
		<li id={`task-${id}`} data-id={id} onClick={handleClick}>
			{isFinished ? <span className="task task-finished">{name}</span> : <span className="task">{name}</span>}
			<button
				data-id={id}
				type="button"
				className={isFinished ? 'btn-redo' : 'btn-done'}
				title="Mark task as done"
				onClick={() => handleActionButton({ type: 'done', id: id })}
			>
				{isFinished ? 'Undo' : 'Done'}
			</button>
			<button
				data-id={id}
				type="button"
				className={isFinished ? 'btn-disabled' : 'btn-edit'}
				title="Edit this task"
				onClick={() => handleActionButton({ type: 'edit', id: id })}
				disabled={isFinished ? true : false}
			>
				Edit
			</button>
			<button
				data-id={id}
				type="button"
				className="btn-delete"
				title="Delete this task"
				onClick={() => handleActionButton({ type: 'delete', id: id })}
			>
				Delete
			</button>
		</li>
	);
};

export default Task;
