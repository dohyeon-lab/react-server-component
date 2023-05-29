import { use } from "react";

async function fetchData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data as {
    id: number;
    title: string;
    body: string;
  }[];
}

export const HomeContainer = () => {
  const data = use(fetchData());

  console.log({ data });

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};
