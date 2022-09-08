import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const LESSON_QUERY = gql`
  query {
    lessons(orderBy: createdAt_ASC, stage: PUBLISHED) {
      description
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

export interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    description: string;
    availableAt: string;
    title: string;
    slug: string;
    lessonType: "class" | "live";
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(LESSON_QUERY);

  return (
    <aside className="w-[384px] bg-gray-700 p-6 border-l border-gray-500">
      <span className="font-bold text-2xl pb-6 mb-6 block border-b border-gray-500">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            description={lesson.description}
            lessonType={lesson.lessonType}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
}
