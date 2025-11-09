import Quiz from "./Quiz";

type Props = {
  params: {
    id: string;
  };
};

export default function QuizPage({ params }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-300 p-12">
      
      <Quiz id={params.id} />
    </div>
  );
}
