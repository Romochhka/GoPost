import React from "react";

function UploadPhoto({ isUploadOpen, setIsUploadOpen }) {
	if (!isUploadOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex justify-center items-end z-10 h-360 w-204">
			<div className="w-312 bg-white rounded-t-xl p-7">
				<button className="w-full text-primarySkyBlue bg-primaryLightBlue py-2 text-lg font-normal rounded-lg hover:bg-primaryLightBlueHover">
					Сделать фото
				</button>
				<button className="w-full text-primarySkyBlue bg-primaryLightBlue py-2 text-lg font-normal rounded-lg mt-2 hover:bg-primaryLightBlueHover">
					Выбрать из галереи
				</button>
				<button
					className="w-full text-neutralSmokeGrey bg-neutralBgGrey15 py-2 text-lg font-normal rounded-lg mt-2 hover:bg-gray-200"
					onClick={() => setIsUploadOpen(false)}
				>
					Отмена
				</button>
			</div>
		</div>
	);
}

export default UploadPhoto;
