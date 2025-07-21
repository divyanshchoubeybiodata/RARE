import Sidebar from "@/components/dashboard/Sidebar";

export default function dashboard() {
  const role = "Admin";
  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <Sidebar role={role} />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"></div>
      </main>
    </div>
  );
}
