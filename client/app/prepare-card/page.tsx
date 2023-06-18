import style from ".user-page.module.css";
import FazaCard from "@/app/components/faza-card/faza-card";

const PrepareCard = () => {
  const fatPhase = { title: "ЖИРНАЯ ФАЗА" };
  const activePhase = "АКТИВНАЯ ФАЗА";
  const waterPhase = "ВОДНАЯ ФАЗА";

  return (
    <div className="w-full mt-14 min-h-screen bg-red-50 px-6 ">
      <FazaCard title={fatPhase.title} />
      <FazaCard title={activePhase} />
      <FazaCard title={waterPhase} />
    </div>
  );
};

export default PrepareCard;

// const fatPhase = { title: "" {

//  ingrds:[
// {ingr_01: {
//   ingrTitle:"Масло органы",
//   ingrFat: "30%",
//   ingrWeight: "30гр"
// }},
// {ingr_02: {
//   ingrTitle:"Масло органы",
//   ingrFat: "30%",
//   ingrWeight: "30гр"
// }}
//  ]
// }
// }
