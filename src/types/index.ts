export const CourseLevel = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
} as const;

export type CourseLevelType = (typeof CourseLevel)[keyof typeof CourseLevel];
