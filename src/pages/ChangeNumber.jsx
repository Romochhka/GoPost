import React from 'react';
import { useNavigate } from 'react-router-dom';

function ChangeNumber() {

	const navigate = useNavigate();
	return (
		<div className="container mx-auto px-4">
			<div className="flex w-full h-12 items-center justify-between">
				<img className="h-6 w-6 ml-[-16px]" src="./arrowBlue.svg" alt="arrow"
				onClick={() => navigate("/	")} />
				<span className="flex-1 text-center text-black font-medium text-xl">
        Сменить номер телефона
      </span>
			</div>
			<p className="text-sm text-neutralSmokeGrey mt-6">
				Вы можете изменить номер телефона, получив SMS с кодом
			</p>
			<div className="relative w-full max-w-sm mt-6 mb-6">
				<label className="absolute -top-3 left-2 px-1 bg-white block text-sm text-primarySkyBlue mb-1" htmlFor="phone">
					Введите номер телефона
				</label>
				<input
					id="phone"
					type="tel"
					placeholder="+7 702 630 22 92"
					className="w-full h-12 border-2 border-primarySkyBlue rounded  px-4 text-lg text-neutralBlack focus:border-primaryLightBlue"
				/>
			</div>
			<button className="w-full max-w-sm bg-primarySkyBlue text-neutralWhite font-medium uppercase tracking-wider py-4 rounded-lg transition">Далее
			</button>
		</div>
	);
}

export default ChangeNumber;
