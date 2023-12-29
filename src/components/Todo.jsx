import React, { useState } from "react";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo({ title, thought });
  };

  return (
    <>
      <main className="m-10">
        <section className="">
          <h1 className="uppercase my-5">Write Your Thought</h1>
          <form
            action=""
            className="flex flex-col w-96"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name=""
              id=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-[1px] border-slate-600 px-5 py-2 outline-none rounded-md mb-2"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              className="border-[1px] border-slate-600 px-5 py-2 outline-none rounded-md mb-2"
            ></textarea>
            <input
              type="submit"
              value="ADD"
              className="border-[1px] border-slate-600 px-5 py-2 outline-none rounded-md cursor-pointer"
            />
          </form>
        </section>
        <section className="">
          <div className="">
            <p className="">{title}</p>
            <p className="">{thought}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Todo;
