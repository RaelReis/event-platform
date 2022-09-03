import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  description: string;
  availableAt: Date;
  lessonType: "class" | "live";
}

export function Lesson({ title, availableAt, lessonType }: LessonProps) {
  const isLessonAvaliable = isPast(availableAt);

  const formatedDate = format(availableAt, "EEEE' • 'dd' de 'LLLL' • 'HH'h'mm", {
    locale: ptBR,
  });


  return (
    <div>
      <span className="text-gray-300">{formatedDate}</span>
      <div className="mt-2 p-4 rounded border border-gray-500 flex flex-col gap-4">
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span className="text-blue-500 text-sm font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-orange-400 text-sm font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs font-bold rounded border border-green-300 px-2 py-[0.125rem] uppercase">
            {lessonType === "class" ? "Aula prática" : "Ao vivo"}
          </span>
        </header>
        <strong className="text-gray-200">{title}</strong>
      </div>
    </div>
  );
}
