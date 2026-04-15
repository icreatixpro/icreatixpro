"use client"

export default function Pagination({
  page,
  setPage,
}: {
  page: number
  setPage: (p: number) => void
}) {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => setPage(page + 1)}
        className="border px-6 py-2 text-sm"
      >
        Load More
      </button>
    </div>
  )
}