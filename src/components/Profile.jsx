import React from "react";

const Profile = ({}) => {

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

	return (
		<main className="w-full bg-neutralWhite">
			<button
				className="mt-6 w-full bg-primaryLightBlue hover:bg-primaryLightBlueHover border-none py-4 rounded-lg text-center text-primarySkyBlue font-medium cursor-pointer uppercase text-[14px] tracking-wide"
			>
				Редактировать профиль
			</button>

			<ul className="w-full flex flex-col mt-6 gap-6 text-neutralBlack">
				{["history", "openCard", "support", "settings", "password", "exit"].map((item, index) => (
					<li key={index} className="flex items-center justify-between gap-4">
						<img
							src={`./${item}.svg`}
							alt={item}
							className="w-10 h-10 opacity-80 transition-opacity duration-300"
						/>
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
	);
};

export default Profile;
