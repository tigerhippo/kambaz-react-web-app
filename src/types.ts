export interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: string;
  notAvailableUntil: string;
  due: string;
}

export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  editing: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export interface Todo {
  id: string;
  title: string;
}
