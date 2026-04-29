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
  console.log(news);
  return (
    <main className="container mx-auto px-4 py-8 grid grid-cols-4  ">
      {/* category list */}
      <div className=" ">
        <h2 className="  text-lg font-medium mb-4  ">All Category</h2>

        <ul className=" flex flex-col gap-2">
          {categories.map((category) => (
            <li
              className=" mx-4 text-gray-500 hover:bg-gray-300 rounded-sm px-2.5 "
              key={category.category_id}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>

      {/* news list */}
      <div className="col-span-2 ">
        <h2 className=" text-lg font-medium mb-4  ">Dragon News Home</h2>

        <div>
          {news.map((n) => (
            <div
              key={n._id}
              className=" mb-4  border border-gray-300 rounded-sm"
            >
              {/* top - author info */}
              <div className=" flex items-center justify-between gap-3 p-3 bg-gray-300  ">
                <div className=" flex items-center justify-between gap-3  ">
                  <Image
                    src={n.author.img}
                    alt="author image "
                    width={40}
                    height={40}
                  ></Image>
                  <div className=" flex items-center justify-between flex-col gap  ">
                    <h3 className=" text-lg font-medium ">{n.author.name}</h3>
                    <p className="text-gray-500">
                      {new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(n.author.published_date))}
                    </p>
                  </div>
                </div>

                <div>
                  <p>save</p>
                </div>
              </div>

              {/* middle */}
              <div className="p-3">
                <h2 className=" text-lg font-medium mb-2"> {n.title} </h2>

                <Image
                  src={n.image_url}
                  alt="news thumbnail"
                  width={600}
                  height={350}
                ></Image>
                <p className=" text-[14px] text-gray-500 ">{n.details} </p>

                <button className=" mt-2 hover:underline text-orange-500">
                  Read More
                </button>
              </div>

              {/* bottom */}
            </div>
          ))}
        </div>
      </div>

      {/* login section */}
      <div className=" p-5 space-y-5  mx-2.5">
        <h2 className=" font-medium mb-4 ">Login With</h2>
        <div className=" flex flex-col gap-3">
          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          {/* GitHub */}
          <button className="btn bg-black text-white border-black">
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Login with GitHub
          </button>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className=" font-medium mb-4 ">Find Us On</h2>

          {/* facebook */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            Facebook
          </button>
          {/* facebook */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            Twitter
          </button>
          {/* facebook */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            Instagram
          </button>
        </div>
      </div>
    </main>
  );
}
