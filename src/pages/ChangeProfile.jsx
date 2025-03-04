import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ChangeProfile = () => {
	const navigate = useNavigate();
	const [selectedCity, setSelectedCity] = useState("");
	const [iin, setIIN] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");

	const cities = [
		"Алматы", "Астана", "Шымкент", "Караганда", "Актобе", "Тараз", "Павлодар", "Усть-Каменогорск", "Семей", "Костанай", "Кызылорда", "Атырау", "Актау", "Уральск", "Петропавловск",
	];

	const fields = [
		{ id: "name", label: "Имя", type: "text" },
		{ id: "surname", label: "Фамилия", type: "text" },
	];

	const handleIINChange = (e) => {
		let value = e.target.value.replace(/\D/g, "").slice(0, 12);
		value = value.replace(/(\d{3})(?=\d)/g, "$1 ");
		setIIN(value);
	};

	const handleEmailChange = (e) => {
		const value = e.target.value;
		setEmail(value);
		setEmailError(value.includes("@") ? "" : "Введите корректный email");
	};

	return (
		<div className="container mx-auto px-4">
			<div className="flex w-full h-12 items-center justify-between">
				<img
					className="h-6 w-6"
					src="./arrowBlue.svg"
					alt="arrow"
					onClick={() => navigate("/")}
				/>
				<span className="flex-1 text-center text-black font-medium text-xl">
          Редактировать профиль
        </span>
			</div>

			<div className="relative w-full max-w-sm mt-6 mb-6">
				<label className="absolute -top-2 left-2 px-1 bg-white block text-sm text-neutralGreySmoke" htmlFor="city">
					Город
				</label>
				<select
					id="city"
					value={selectedCity}
					onChange={(e) => setSelectedCity(e.target.value)}
					className="w-full h-12 border-2 border-alphaWhite85 rounded px-4 text-lg text-alphaBlack75 focus:border-primaryLightBlue"
				>
					{cities.map((city) => (
						<option key={city} value={city}>{city}</option>
					))}
				</select>
			</div>

			{fields.map(({ id, label, type }) => (
				<div key={id} className="relative w-full max-w-sm mt-6 mb-6">
					<label className="absolute -top-2 left-2 px-1 bg-white block text-sm text-neutralGreySmoke" htmlFor={id}>
						{label}
					</label>
					<input
						id={id}
						type={type}
						className="w-full h-12 border-2 border-alphaWhite85 rounded px-4 text-lg text-neutralBlack focus:border-primaryLightBlue"
					/>
				</div>
			))}

			<div className="relative w-full max-w-sm mt-6 mb-6">
				<label className="absolute -top-2 left-2 px-1 bg-white block text-sm text-neutralGreySmoke" htmlFor="iin">
					ИИН
				</label>
				<input
					id="iin"
					type="text"
					value={iin}
					onChange={handleIINChange}
					className="w-full h-12 border-2 border-alphaWhite85 rounded px-4 text-lg text-neutralBlack focus:border-primaryLightBlue"
				/>
			</div>

			<div className="relative w-full max-w-sm mt-6 mb-6">
				<label className="absolute -top-2 left-2 px-1 bg-white block text-sm text-neutralGreySmoke" htmlFor="email">
					E-mail
				</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={handleEmailChange}
					className={`text-black w-full h-12 border-2 rounded px-4 text-lg focus:border-primaryLightBlue ${emailError ? "border-red-500" : "border-alphaWhite85"}`}
				/>
				{emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
			</div>

			<button
				onClick={() => navigate("/")}
				className="w-full max-w-sm bg-primarySkyBlue text-neutralWhite text-sm font-medium uppercase tracking-wider py-5 rounded-lg transition"
			>
				Сохранить
			</button>
		</div>
	);
};

export default ChangeProfile;
