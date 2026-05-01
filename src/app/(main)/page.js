import GithubSignIn from "@/components/buttons/GithubSignIn";
import GoogleSignIn from "@/components/buttons/GoogleSignIn";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
const fetchCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};
const fetchNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};
export default async function Home() {
  const categories = await fetchCategory();
  const news = await fetchNews("01");
  // console.log(news);

  return (
    <main className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* category list */}
      <div className="lg:col-span-1">
        <h2 className="text-lg font-medium mb-4">All Category</h2>

        <ul className="flex flex-col gap-2">
          {categories.map((category) => (
            <li
              className="text-gray-500 hover:bg-gray-300 rounded-sm px-2 py-1"
              key={category.category_id}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>

      {/* news list */}
      <div className="md:col-span-2 lg:col-span-2">
        <h2 className="text-lg font-medium mb-4">Dragon News Home</h2>

        <div>
          {news.map((n) => (
            <div key={n._id} className="mb-4 border border-gray-300 rounded-sm">
              {/* top */}
              <div className="flex items-center justify-between gap-3 p-3 bg-gray-300">
                <div className="flex items-center gap-3">
                  <Image
                    src={n.author.img}
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm md:text-lg font-medium">
                      {n.author.name}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(n.author.published_date))}
                    </p>
                  </div>
                </div>

                <p className="text-sm">save</p>
              </div>

              {/* middle */}
              <div className="p-3">
                <h2 className="text-base md:text-lg font-medium mb-2">
                  {n.title}
                </h2>

                <Image
                  src={n.image_url}
                  alt="news"
                  width={600}
                  height={350}
                  className="w-full h-auto rounded"
                />

                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {n.details}
                </p>

                <Link href={`/news/${n._id}`}>
                  <button className="mt-2 hover:underline text-orange-500 text-sm">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* login section */}
      <div className="lg:col-span-1 space-y-5">
        <h2 className="font-medium">Login With</h2>

        <div className="flex flex-col gap-3">
          <GoogleSignIn />

          <GithubSignIn />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">Find Us On</h2>

          <button className="btn bg-white text-black border">Facebook</button>
          <button className="btn bg-white text-black border">Twitter</button>
          <button className="btn bg-white text-black border">Instagram</button>
        </div>
      </div>
    </main>
  );
}
