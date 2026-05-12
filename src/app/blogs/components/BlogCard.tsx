import Link from "next/link";
import Image from "next/image";

export default function FeaturedPost({ blog }: any) {
  if (!blog) return null;

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center py-10">
      
      <div className="relative w-full h-[300px] md:h-[420px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-2xl object-cover"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold">
          {blog.title}
        </h1>

        <p className="mt-4 text-gray-600">
          {blog.description}
        </p>

        <Link href={`/blogs/${blog.slug}`}>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
            Read More →
          </button>
        </Link>
      </div>

    </div>
  );
}