import Engineering from "../components/svg/Engineering";
import Installation from "../components/svg/Installation";
import Maintenance from "../components/svg/Maintenance";
import Expansion from "../components/svg/Expansion";
import Renovation from "../components/svg/Renovation";
import Consulting from "../components/svg/Consulting";

const servicesItems = [
    {id: 1, icon: <Engineering />, title: "Engineering", content: "Design and calculations of the structures according to European Norms."},
    {id: 2, icon: <Installation />, title:"Installation", content: "Both “Only supervisor” or “ Full Scope Installation” services with our skilled and expert engineers, technicians and installers."},
    {id: 3, icon: <Maintenance />, title:"Maintenance", content: "Periodical maintenance, re-painting ,re-locating services with our talented technicians and repairment."},
    {id: 4, icon: <Expansion/>, title:"Expansion", content: "Advising and supplying expansion parts for the current parks."},
    {id: 5, icon: <Renovation/>, title:"Renovation", content: "Renewing the old parks with multiple solutions."},
    {id: 6, icon: <Consulting/>, title:"Consulting", content: "Solving the troubles and advicing for new oppprtunities in the parks."}
];

export default servicesItems;