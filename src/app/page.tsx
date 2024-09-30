import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/9SbLlBPpHqRJVEpjwAXCK6gEwroZiOxvjU7C3nytmudh5qBR",
  "https://utfs.io/f/9SbLlBPpHqRJ46X3isFv3YVlbSg56qC4GoxrBcWXsePEdLMu",
  "https://utfs.io/f/9SbLlBPpHqRJ7BZjQjZKMSOyU6YxIRtp5mwPZezWncdlJgCX"
];

const mockImages = mockUrls.map((url, index) => ( {
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (          
          <div key={image.id} className = "w-60">
            <img src={image.url}></img>
            </div>
        ))}
        </div>
    </main>
  );
}
