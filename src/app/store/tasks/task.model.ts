
export interface Task {
  id: number;
  header: string;
  taskName: string;
  timeStamp: Date;
  priority: string;
  responsibleIds: number[];
  status: string;
}

export interface TasksState {
  tasks: Task[];
  isLoaded: boolean;
  isPending: boolean
  errorMsg: string;
}
