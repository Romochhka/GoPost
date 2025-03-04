import React, {} from 'react';
import { useNavigate } from 'react-router-dom';

function ChangeNumber() {
	const [phoneNumber, setPhoneNumber] = React.useState('+7');
	const navigate = useNavigate();

	const handleChange = (event) => {
		let value = event.target.value.replace(/[^\d]/g, '');

		if (value.startsWith('8')) {
			value = '7' + value.substring(1);
		} else if (!value.startsWith('7')) {
			value = '7' + value;
		}

		if (value.length > 1) {
			value = `+7 ${value.substring(1, 4)} ${value.substring(4, 7)} ${value.substring(7, 9)} ${value.substring(9, 11)}`.trim();
		} else {
			value = '+7';
		}

		if (value.replace(/\D/g, '').length <= 11) {
			setPhoneNumber(value);
			console.log(value)

		}
	};




	return (
		<div className="container mx-auto px-4">
			<div className="flex w-full h-12 items-center justify-between">
				<img className="h-6 w-6" src="./arrowBlue.svg" alt="arrow"
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
					value={phoneNumber}
					onChange={handleChange}
					placeholder="+7 702 630 22 92"
					className="w-full h-12 border-2 border-primarySkyBlue rounded  px-4 text-lg text-neutralBlack focus:border-primaryLightBlue"
				/>
			</div>
			<button onClick={() => navigate("/Sms-Verification")} className="w-full max-w-sm bg-primarySkyBlue text-neutralWhite text-sm font-medium uppercase tracking-wider py-5 rounded-lg transition">Далее
			</button>
		</div>
	);
}

export default ChangeNumber;
