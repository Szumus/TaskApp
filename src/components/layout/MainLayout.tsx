import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Main from "./task/Main";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-2 items-center ">
        <div className="m-1 ">
          <Sidebar />
        </div>
        <main className="w-full">
          <Main />
        </main>
        <div className="m-1">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
