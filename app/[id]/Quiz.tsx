import { Button } from "@/components/ui/button";

const dummy_quiz = [
  {
    question: "How many seas is there in the world",
    answer: "7",
    options: ["2", "4", "6", "67"],
    id: 1,
  },
  {
    question: "How much do i love you",
    answer: "67%",
    options: ["100%", "40%", "63%", "67%"],
    id: 2,
  },
  {
    question: "How much do i love you",
    answer: "67%",
    options: ["100%", "40%", "63%", "67%"],
    id: 3,
  },
  {
    question: "How much do i love you",
    answer: "67%",
    options: ["100%", "40%", "63%", "67%"],
    id: 4,
  },
  {
    question: "How much do i love you",
    answer: "67%",
    options: ["100%", "40%", "63%", "67%"],
    id: 5,
  },
];

export default function Quiz({ id }: { id: string }) {
  return (
    <main className="p-6 w-[60%] h-fit bg-[#bebec1] rounded-2xl shadow-2xl text-xl text-black flex justify-center flex-wrap">
      <div className="header flex w-full text-lg! font-[550] items-center justify-between p-4 rounded-xl bg-[#afafb1] h-5">
        <div>Quiz: {id}</div>
        <div>Username</div>
      </div>
      <div className="flex mt-12 flex-wrap w-full gap-10">
        {dummy_quiz.map((e) => {
          return (
            <div key={e.id} className="bg-[#afafb1] p-6 w-full rounded-xl">
              <div>{e.question}</div>
              <div className="pt-4 flex flex-wrap gap-2">
                {e.options.map((e) => {
                  return (
                    <div
                      className="w-full text-lg cursor-pointer p-2 px-3 rounded-lg bg-[#a4a4a7] "
                      key={e}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Button className="mt-8 w-full bg-[#218253] hover:bg-[#1b764a] cursor-pointer">Submit</Button>
    </main>
  );
}
