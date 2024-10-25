
type Post = {
  id: number;
  title: string;
  body: string;
}
export default async function Home() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts') 
  const posts = await response.json()

  return (
   <main className="px-20 py-10">
      <h1>Posti</h1>

      <div>
        {posts.map((post: Post) => (

          <div key={post.id}>
            <h2 className="text-xl font-bold mb-2">
              {post.title}
            </h2>

            <p>
              {post.body}
            </p>
          </div>
        ))}
      </div>
   </main>
  );
}
