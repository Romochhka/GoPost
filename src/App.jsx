import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import UploadPhoto from "./components/UploadPhoto";
import ProfileHeader from "./components/ProfileHeader";
import ChangeNumber from "./pages/ChangeNumber";

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
                <Route path="/change-number" element={<ChangeNumber />} />
            </Routes>
        </div>
    );
}

export default App;
