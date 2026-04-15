export default function BlogLayout({ children, toc }: any) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 px-6">

      <article className="col-span-12 lg:col-span-8 prose prose-lg max-w-none">
        {children}
      </article>

      <aside className="hidden lg:block col-span-4">
        <div className="sticky top-24">
          {toc}
        </div>
      </aside>

    </div>
  );
}