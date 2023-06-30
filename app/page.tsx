"use client";

import Image from "next/image";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleTaskAdd = () => {
    if (inputValue.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const handleTaskComplete = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = true;
      return updatedTasks;
    });
  };

  const handleTaskDelete = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className=" flex flex-col items-center justify-center m-4 p-2 bg-slate-600">
      <div>
        <input
          className="m-4 p-1"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
          style={{ color: "black" }}
        />
        <input
          className="m-4 p-1"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search tasks"
          style={{ color: "black" }}
        />
        <button
          className="m-2 px-4 py-1 bg-button rounded-full shadow-md"
          onClick={handleTaskAdd}
        >
          Add Task
        </button>
      </div>
      <div>
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              {task.text}
              {!task.completed && (
                <>
                  <button
                    className="m-2 px-4 py-1 bg-button rounded-full shadow-md"
                    onClick={() => handleTaskComplete(index)}
                  >
                    Complete
                  </button>
                  <button
                    className="m-2 px-4 py-1 bg-button rounded-full shadow-md"
                    onClick={() => handleTaskDelete(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen  items-center  py-24 bg-gradient-to-r from-blue-900 to-teal-500 text-white">
        <div className="absolute top-0 text-center mt-4 mx-auto">
          <h1 className="text-5xl font-bold mb-2">
            Check your financial health
          </h1>
          <p className="relative right-8 ">
            Use WeathoMeter to get a free report
            <br />
            card for your finances- within minutes!
          </p>
          <button className="relative right-8 mt-4 px-4 py-2 bg-button rounded-full shadow-md">
            Get Started
          </button>
        </div>

        {/* MOBILE PART BEGINS */}
        <div className="phone flex mx-auto left-1/2 mt-16">
          <div className="flex flex-col justify-center items-start pr-4">
            <label className="flex items-center">
              <Image
                src="/checkbox.svg"
                alt="Checkbox Image"
                width={40}
                height={40}
                priority
              />
              <div className="flex flex-col">
                <span className="ml-2">Expected Retirement Age</span>
                <div className="border w-full rounded-xl relative top-2"></div>
              </div>
            </label>

            <label className="flex items-center mt-2">
              <Image
                src="/checkbox.svg"
                alt="Checkbox Image"
                width={40}
                height={40}
                priority
              />
              <div className="flex flex-col">
                <span className="ml-2">Identify Mistakes</span>
                <div className="border w-full rounded-xl relative top-2"></div>
              </div>
            </label>
          </div>

          <div className="relative">
            <Image
              src="/mobile.svg"
              alt="Mobile Picture"
              width={300}
              height={400}
              priority
            />
          </div>

          <div className="flex flex-col justify-center items-start -pr-4">
            <label className="flex items-center">
              <Image
                src="/checkbox.svg"
                alt="Checkbox Image"
                width={40}
                height={40}
                priority
              />
              <div className="flex flex-col">
                <span className="ml-2">Personalised Road Map</span>
                <div className="border w-full rounded-xl relative top-2"></div>
              </div>
            </label>
            <label className="flex items-center mt-2">
              <Image
                src="/checkbox.svg"
                alt="Checkbox Image"
                width={40}
                height={40}
                priority
              />
              <div className="flex flex-col">
                <span className="ml-2">Tips to Improve</span>
                <div className="border w-full rounded-xl relative top-2"></div>
              </div>
            </label>
          </div>
        </div>

        {/* FOREGROUND BEGINS */}
        <div className="fore absolute top-3.5">
          <Image
            src="/foreground.svg"
            alt="Foreground Image"
            width={1500}
            height={0}
            priority
          />
          {/* <div className="absolute bottom-1/3 left-1/3 mx-auto flex flex-col items-center bg-[url('https://placekitten.com/1400')]">
            chagfj
          </div> */}
          <div className="absolute bottom-1/3 left-1/3 mx-auto flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-0 my-0">How it Works?</h1>
            <Image
              className="work2"
              src="uses.svg"
              alt="Image"
              width={400}
              height={5}
            />
            <div className="flex justify-between items-center text-center">
              <p className="px-3">
                Answer few
                <br />
                questions
              </p>
              <p className="p-3">
                Register using <br />
                phone and OTP
              </p>
              <p className="p-3">
                Get report and
                <br />
                personal roadmap
              </p>
            </div>
            <button className="my-4 mx-auto px-4 py-2 bg-button rounded-full shadow-md">
              Get Started
            </button>
          </div>
          <TodoList />
        </div>
      </main>
      {/* <TodoList /> */}
    </>
  );
}
