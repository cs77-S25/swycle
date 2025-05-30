import { Route, Routes } from "react-router-dom";
import Store from "@/pages/store/Store";
import Forum from "@/pages/forum/Forum";
import Home from "@/pages/home/Home";
import Navbar from "./components/navbar";
import Item from "@/pages/item/Item";
import Profile from "@/pages/profile/Profile";
import UploadItem from "@/pages/uploadItem/UploadItem";
import ForumPostPage from "@/pages/forum/ForumPostPage";
import OffersMade from "./pages/OffersMade/OffersMade";
import OffersReceived from "./pages/OffersReceived/OffersReceived";
import "./app.css";
import { ThemeProvider } from "@/components/theme-provider";


function App() {
	return (
		<>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{/* Navbar component */}
			<Navbar />
			{/* Main content area */}
			<Routes>
				{/* Defining routes for all paths on the website*/}
				<Route path="/" element={<Home />} />
				<Route path="/forum" element={<Forum />} />
				<Route path="/store" element={<Store />} />
				<Route path="/item/:itemId" element={<Item />} />
				<Route path="/profile/:userId" element={<Profile />} />
				<Route path="/upload-item" element={<UploadItem />} />
				<Route path="/forum/post/:postId" element={<ForumPostPage />} />
				<Route path="/offers-made" element={<OffersMade />} />
				<Route path="/offers-received" element={<OffersReceived />} />
			</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
