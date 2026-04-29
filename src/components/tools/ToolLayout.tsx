const ToolLayout = ({ title, children }: any) => {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          {title}
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;