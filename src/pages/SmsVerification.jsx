import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const SmsVerification = () => {
	const navigate = useNavigate();
	const [OTP, setOTP] = useState(new Array(4).fill(''));
	const [timer, setTimer] = useState(5);
	const inputRefs = useRef([]);

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [timer]);

	const handleResend = () => {
		setTimer(5);
	};

	const handleChange = (e, index) => {
		const value = e.target.value.replace(/\D/g, '');
		const newOTP = [...OTP];

		if (value) {
			newOTP[index] = value;
			setOTP(newOTP);

			if (index < OTP.length - 1) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleBackspace = (e, index) => {
		if (e.key === 'Backspace') {
			const newOTP = [...OTP];

			if (OTP[index]) {
				newOTP[index] = '';
			} else if (index > 0) {
				inputRefs.current[index - 1].focus();
				newOTP[index - 1] = '';
			}

			setOTP(newOTP);
		}
	};

	const handleSubmit = () => {
		alert(`Введенный код: ${OTP.join('')}`);
	};

	return (
		<div className="container mx-auto px-4">
			<div className="flex w-full h-12 items-center justify-between">
				<img
					className="h-6 w-6 ml-[-16px] cursor-pointer"
					src="./arrowBlue.svg"
					alt="arrow"
					onClick={() => navigate('/change-number')}
				/>
				<span className="flex-1 text-center text-black font-medium text-xl">
                    Введите код из SMS
                </span>
			</div>

			<p className="text-sm text-neutralSmokeGrey mt-6 text-center">
				На +7 702 630-22-92 отправлен SMS с кодом подтверждения.
			</p>

			<div className="flex justify-center gap-2.5 my-6">
				{OTP.map((data, i) => (
					<input
						key={i}
						type="text"
						maxLength="1"
						value={data}
						ref={(el) => (inputRefs.current[i] = el)}
						onChange={(e) => handleChange(e, i)}
						onKeyDown={(e) => handleBackspace(e, i)}
						className="w-14 h-14 border-2 border-gray-300 rounded text-center text-lg outline-none focus:border-primarySkyBlue text-alphaBlack75"
					/>
				))}
			</div>

			{timer > 0 ? (
				<p className="text-sm text-center text-gray-500">
					Отправить повторно через {timer} сек.
				</p>
			) : (
				<button
					onClick={handleResend}
					className="text-primarySkyBlue font-medium"
				>
					Отправить повторно
				</button>
			)}

			<button
				onClick={handleSubmit}
				className="w-full max-w-sm bg-primarySkyBlue text-neutralWhite text-sm font-medium uppercase tracking-wider py-5 rounded-lg transition hover:bg-primaryLightBlue mt-6"
			>
				Подтвердить
			</button>
		</div>
	);
};

export default SmsVerification