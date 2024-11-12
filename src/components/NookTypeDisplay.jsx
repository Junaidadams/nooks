import { nookTypes } from "../../constants";

const NookTypeDisplay = () => {
  return (
    <div className="text-ghost-white grid grid-cols-1 sm:grid-cols-2 m-auto ">
      {nookTypes.map(({ key, name, description, icon: Icon }) => (
        <div
          key={key}
          className="p-4 sm:p-6 m-6 sm:m-8 border-b-[1px] border-periwinkle"
        >
          <div className="flex m-auto">
            <Icon className="h-10 w-10 ml-auto mr-1" color="#E4D9FF" />
            <h1 className="text-xl font-semibold mr-auto ml-1 text-periwinkle my-auto">
              {name}
            </h1>
          </div>
          <p className="text-center font-semibold">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default NookTypeDisplay;
