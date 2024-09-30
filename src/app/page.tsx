import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://utfs.io/f/9SbLlBPpHqRJVEpjwAXCK6gEwroZiOxvjU7C3nytmudh5qBR",
  "https://utfs.io/f/9SbLlBPpHqRJ46X3isFv3YVlbSg56qC4GoxrBcWXsePEdLMu",
  "https://utfs.io/f/9SbLlBPpHqRJ7BZjQjZKMSOyU6YxIRtp5mwPZezWncdlJgCX"
];

const mockImages = mockUrls.map((url, index) => ( {
  id: index + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (          
          <div key={image.id + "-" + index} className = "w-60">
            <img src={image.url}></img>
            </div>
        ))}
        </div>
    </main>
  );
}
