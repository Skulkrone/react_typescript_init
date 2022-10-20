import React from "react";

type CardProps = {
  title: string;
  content: string;
};

// export default function card(props: CardProps) {
// console.log(props);
// On peut faire du destructuring
export default function Card({ title, content }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
