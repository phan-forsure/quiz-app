export default function Quiz({ id }: { id: string }) {
  return (
    <main className="p-12 w-[40%] h-fit bg-[#bebec1] rounded-2xl shadow-2xl text-xl text-black flex justify-center flex-wrap">
      <div className="header flex items-center justify-end border-b bg-zinc-400 border-b-zinc-500 h-5">
        <div>Quiz: {id}</div>
      </div>
      Quiz
    </main>
  );
}
