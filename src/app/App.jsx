import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../components/Profile.jsx";
import UploadPhoto from "../components/UploadPhoto.jsx";
import ProfileHeader from "../components/ProfileHeader.jsx";
import ChangeNumber from "../pages/ChangeNumber.jsx";
import SmsVerification from "../pages/SmsVerification.jsx";
import ChangeProfile from "../pages/ChangeProfile.jsx";
import ChangePassword from "../pages/ChangePassword.jsx";

function App() {
    const [isUploadOpen, setIsUploadOpen] = React.useState(false);

    return (
        <div className="max-w-[1200px] w-full h-full mx-auto px-4 flex-1">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <ProfileHeader onAvatarClick={() => setIsUploadOpen(true)} />
                            <Profile />
                            <UploadPhoto
                                isUploadOpen={isUploadOpen}
                                setIsUploadOpen={setIsUploadOpen}
                            />
                        </>

                    }
                />
                <Route path="/Change-Number" element={<ChangeNumber />} />
                <Route path="/SMS-Verification" element={<SmsVerification />} />
                <Route path="/Change-Profile" element={<ChangeProfile />} />
                <Route path="/Change-Password" element={<ChangePassword />} />
            </Routes>
        </div>
    );
}

export default App;
