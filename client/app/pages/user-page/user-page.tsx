import style from ".user-page.module.css";
import FazaCard from "@/app/components/faza-card/faza-card";

const UserPage = () => {
  return (
    <div className="flex w-full h-screen bg-gray-600">
      UserPage <FazaCard />
    </div>
  );
};

export default UserPage;
