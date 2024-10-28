import Engineering from "../components/svg/Engineering";
import Installation from "../components/svg/Installation";
import Maintenance from "../components/svg/Maintenance";
import Expansion from "../components/svg/Expansion";
import Renovation from "../components/svg/Renovation";
import Consulting from "../components/svg/Consulting";

const servicesItems = [
    {id: 1, icon: <Installation />, titleKey: "services.0.title", contentKey: "services.0.content"},
    {id: 2, icon: <Expansion/>, titleKey: "services.1.title", contentKey: "services.1.content"},
    {id: 3, icon: <Renovation/>, titleKey: "services.2.title", contentKey: "services.2.content"},
    {id: 4, icon: <Maintenance />, titleKey: "services.3.title", contentKey: "services.3.content"},
    {id: 5, icon: <Engineering />, titleKey: "services.4.title", contentKey: "services.4.content"},
    {id: 6, icon: <Consulting/>, titleKey: "services.5.title", contentKey: "services.5.content"}
];

export default servicesItems;