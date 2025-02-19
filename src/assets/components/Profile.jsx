import React from "react";

function Profile ({onAvatarClick}) {
	return (
		<header className="flex flex-col items-center bg-neutralWhite my-6 gap-6 relative">
			<div className="grid grid-cols-[60px_auto] grid-rows-[auto_auto] items-center gap-4 w-full cursor-pointer"
				 onClick={onAvatarClick} >
				<img
					width={60}
					height={60}
					src="./1.jpg"
					alt=""
					className="w-[60px] h-[60px] object-cover rounded-full"
				/>
				<div className="flex flex-col gap-2">
					<h3 className="text-[18px] font-medium text-neutralBlack">Олжас Шерматов</h3>
					<h5 className="text-[14px] text-neutralDarkGrey">№ 01200R</h5>
				</div>
			</div>
			<h3 className="flex justify-between items-center w-full text-neutralBlack">
				+7 702 630 2292
				<img src="./arrow.svg" alt="" className="w-3 h-3 " />
			</h3>
			<div className="absolute bottom-[-24px] w-screen h-px bg-neutralLightGrey" />
		</header>
	);
}

export default Profile;