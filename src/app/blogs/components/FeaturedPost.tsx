import Link from "next/link";

export default function FeaturedPost({ blog }: any) {
  if (!blog) return null;

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center py-10">

      <img src={blog.image} className="rounded-2xl" />

      <div>
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="mt-4 text-gray-600">{blog.description}</p>

        <Link href={`/blogs/${blog.slug}`}>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
            Read More →
          </button>
        </Link>
      </div>

    </div>
  );
}