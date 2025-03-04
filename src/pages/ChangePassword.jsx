	import React, {useState} from "react";
	import { useNavigate } from "react-router-dom";

	function ChangePassword() {
		const navigate = useNavigate();

		const [showPassword , setShowPassword] = useState(false);

		const passwordVisibility = () => {
			setShowPassword(!showPassword);
		}


		return (
			<div className="container mx-auto px-4 w-full">
				<div className="flex w-full h-12 items-center justify-between">
					<img
						className="h-6 w-6"
						src="./arrowBlue.svg"
						alt="arrow"
						onClick={() => navigate("/")}
					/>
					<span className="flex-1 text-left ml-8 text-black font-medium text-xl">
			  Изменить пароль
			</span>
				</div>

				<div className="relative w-full max-w-lg mt-6 mb-6">
					<img
						className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
						src="./Mask.svg"
						alt="mask"
						onClick={passwordVisibility}
					/>

					<input
						id="password"
						type={ showPassword? "text" : "password"}
						placeholder="Введите новый пароль"
						className="w-full h-14 border border-alphaWhite85 rounded px-4 text-base sm:text-lg text-alphaBlack75 focus:border-primaryLightBlue"
					/>
				</div>

				<p className="text-xs text-neutralSmokeGrey text-center opacity-75 mt-6">
					Пароль должен содержать не менее 6 символов, в том числе цифры, прописные и строчные буквы латинского алфавита.
				</p>

				<button
					onClick={() => navigate("/Sms-Verification")}
					className="mt-6 w-full max-w-lg bg-primarySkyBlue text-neutralWhite text-sm font-medium uppercase tracking-wider py-4 rounded-md transition"
				>
					Сменить пароль
				</button>
			</div>
		);
	}

	export default ChangePassword;
