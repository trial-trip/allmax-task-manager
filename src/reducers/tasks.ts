export type TaskPayload = {
  id: number; // not sure
  title: string;
  description: string;
  deadline: string; // not sure
  completionDate: string; // not sure
  priority: number; // not sure
};

type State = TaskPayload[];

const initialState: State = [];

export const tasks = (state: State = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          deadline: action.deadline,
          completionDate: 'DATE_UNSET',
          priority: action.priority
        }
      ];
    case 'EDIT_TASK':
      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              ...action
            }
          : task
      );
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.id
          ? {
              ...task,
              completionDate: task.completionDate !== 'DATE_UNSET' ? 'DATE_UNSET' : action.completionDate
            }
          : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};
