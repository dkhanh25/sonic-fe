export const CourseLevel = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
} as const;

export type CourseLevelType = (typeof CourseLevel)[keyof typeof CourseLevel];

export type CourseType = {
  id: number;
  title: string;
  description: string;
  image: string;
  level: CourseLevelType;
  duration: string;
  lectures: string;
};
