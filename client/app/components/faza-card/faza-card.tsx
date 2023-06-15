import Badge from "@/app/UI/badge/badge";
import Inputs from "@/app/UI/input/input";

type Props = {
  title: string;
  procName?: string;
};

const procName = "Жирность";
const weightName = "Вес";
const proc = "30%";
const weight = "50гр";
const FazaCard = ({ title }: Props) => {
  return (
    <div className="h-100 mt-4 p-6 border-2 border-red-300">
      <div className="justify-between ">
        <div className="flex my-3 justify-between p-2 ">
          <div className="text-2xl font-bold">
            <h1 className="font-card_title">{title}</h1>
          </div>

          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Badge children={weightName} />
            </div>
            <div className="flex w-1/2 justify-end">
              <Badge children={procName} />
            </div>
          </div>
        </div>
        <div className="flex justify-between p-2 ">
          <span className="w-3/5"></span>
          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Inputs />
            </div>

            <div className="flex w-1/2 justify-end">
              <Inputs />
            </div>
          </div>
        </div>
        <div className="flex my-3 font-card_title font-bold justify-between p-2 rounded-md bg-red-200">
          <span className="w-3/5"> Масло органы </span>
          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Badge children={weight} />
            </div>
            <div className="flex w-1/2 justify-end">
              <Badge children={proc} />{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <div className="flex my-3 font-card_title font-bold justify-between p-2 rounded-md bg-red-200">
          <span className="w-3/5"> Эмульгатор </span>
          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Badge children={weight} />
            </div>
            <div className="flex w-1/2 justify-end">
              <Badge children={proc} />{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <div className="flex my-3 font-card_title font-bold justify-between p-2 rounded-md bg-red-200">
          <span className="w-3/5"> Со-эмульгатор </span>
          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Badge children={weight} />
            </div>
            <div className="flex w-1/2 justify-end">
              <Badge children={proc} />{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <div className="flex my-3 font-card_title font-bold justify-between p-2 rounded-md bg-red-200">
          <span className="w-3/5"> Масло абрикосововой косточки </span>
          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Badge children={weight} />
            </div>
            <div className="flex w-1/2 justify-end">
              <Badge children={proc} />{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <div className="flex my-3 font-card_title font-bold justify-between p-2 rounded-md bg-red-200">
          <span className="w-3/5"> Масло зародышей пшеницы </span>
          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Badge children={weight} />
            </div>
            <div className="flex w-1/2 justify-end">
              <Badge children={proc} />{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <div className="flex my-3 font-card_title font-bold justify-between p-2 rounded-md bg-red-200">
          <span className="w-3/5"> Масло рисовых отрубей </span>
          <div className="flex w-2/5 justify-end">
            <div className="flex w-1/2 justify-end">
              <Badge children={weight} />
            </div>
            <div className="flex w-1/2 justify-end">
              <Badge children={proc} />{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default FazaCard;
