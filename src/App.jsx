import React from "react";
import Profile from "./assets/components/Profile.jsx";
import UploadPhoto from "./assets/components/UploadPhoto.jsx";
import ChangePassword from "./assets/components/ChangePassword.jsx";


function App() {

    const [isUploadOpen, setIsUploadOpen] = React.useState(false);


  return (
      <div className="max-w-[1200px] w-full h-full mx-auto px-4 flex-1">
        <Profile onAvatarClick={() => setIsUploadOpen(true)} />
        <UploadPhoto isUploadOpen={isUploadOpen} setIsUploadOpen={setIsUploadOpen} />
        <main className="w-full bg-neutralWhite">
          <button className="mt-6 w-full bg-primaryLightBlue hover:bg-primaryLightBlueHover border-none py-4 rounded-lg text-center text-primarySkyBlue font-medium cursor-pointer uppercase text-[14px] tracking-wide">
            Редактировать профиль
          </button>
          <ul className="w-full flex flex-col mt-6 gap-6 text-neutralBlack">
            {["history", "openCard", "support", "settings", "password", "exit"].map((item, index) => (
                <li key={index} className="flex items-center justify-between gap-4">
                  <img src={`./${item}.svg`} alt={item} className="w-10 h-10 opacity-80 transition-opacity duration-300" />
                  <span className="flex-1 text-left capitalize">{getMenuLabel(item)}</span>
                  {item !== "exit" && <img src="./arrow.svg" alt="" className="w-3 h-3" />}
                </li>
            ))}
          </ul>
          <footer className="flex justify-center fixed left-0 bottom-0 w-full bg-neutralWhite py-1 border-t border-neutralLightGrey">
            {["home", "historyBtn", "profile"].map((btn, index) => (
                <img key={index} src={`./${btn}.svg`} alt={btn} />
            ))}
          </footer>
        </main>
      </div>
  );
}

const getMenuLabel = (item) => {
  const labels = {
    history: "История платежей",
    openCard: "Открыть карту",
    support: "Служба поддержки",
    settings: "Настройки",
    password: "Изменить пароль",
    exit: "Выйти",
  };
  return labels[item] || "";
};

export default App;
