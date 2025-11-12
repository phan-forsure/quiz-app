import { resolve } from "path";
import Quiz from "./Quiz";

type Props = {
  params: {
    id: string;
  };
};

export default async function QuizPage({ params }: Props) {
  const resolvedParams = await params;
  console.log(resolvedParams);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-300 p-12">
      <Quiz id={resolvedParams.id} />
    </div>
  );
}
