import { useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

const cards = [
  {
    imageName: "img1",
    title: "Server Side Rendering with React and Redux",
    text: "Build React, Redux, and React Router apps with server side rendering (SSR), Isomorphic, and Universal JS techniques",
  },
  {
    imageName: "img2",
    title: "React - The Complete Guide",
    text: "Dive in and learn React from scratch. Learn Reactjs, Redux, React Routing, Animations, Next.js basics and way more!",
  },
  {
    imageName: "img3",
    title: "The Complete React Web Developer Course (with Redux)",
    text: "Learn how build and launch React web applications using React v16, Redux, Webpack, React-Router v4, and more!",
  },
];

export const HomePage = () => {
  const [searchCard, setsearchCard] = useState("");

  const handleChange = ({ target: { value } }) => {
    setsearchCard(value);
  };

  return (
    <div>
      <Header />
      <input
        className="appearance-none border-b p-2 m-4 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
        placeholder="Search for Courses"
        onChange={handleChange}
      />
      <div className="container mx-auto m-12">
        <div className="flex flex-wrap justify-center">
          {cards
            .filter((card) =>
              card.title.toLowerCase().includes(searchCard.toLowerCase())
            )
            .map((card, index) => {
              return <Card key={index} {...card} />;
            })}
        </div>
      </div>
    </div>
  );
};
