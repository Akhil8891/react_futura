import Welcome from "./Components/React";
import Bikes from "./Components/Bikes";
import Nested from "./Components/Nested";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Nestedlist from "./Components/Nestedlist";

const Car = () => {
return (
<> <Navbar /> <Welcome /> <Bikes /> <Nested /> <Nestedlist /> <Footer />
</>
);
};

export default Car;
