import useDeviceDetect from "../../hooks/useDeviceDetect";
import DeskHeader from "./DeskHeader";
import MobHeader from "./MobHeader";

const Header = () => {
    const device = useDeviceDetect();

    return (
        <header className="header">
            {(device === "desk") ? <DeskHeader /> : <MobHeader />}
        </header>
    )
};

export default Header;