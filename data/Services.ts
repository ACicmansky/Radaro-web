import {
    FaUserTie, FaHardHat, FaSearchPlus, FaCheckCircle, FaCogs,
    FaExclamationTriangle, FaLightbulb, FaFileAlt, FaUsers
} from "react-icons/fa"

export interface Service {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        icon: FaUserTie,
        title: "Manažment stavebných projektov",
        description: "Komplexné riadenie projektov od plánovania po dokončenie"
    },
    {
        icon: FaHardHat,
        title: "Stavebný dozor",
        description: "Profesionálny dohľad nad všetkými aspektmi stavebného procesu"
    },
    {
        icon: FaSearchPlus,
        title: "Technické a odborné obhliadky",
        description: "Detailné hodnotenie stavu nehnuteľností"
    },
    {
        icon: FaCheckCircle,
        title: "Zabezpečenie a kontrola kvality",
        description: "Monitoring kvality prác a materiálov"
    },
    {
        icon: FaCogs,
        title: "Výber technologických riešení",
        description: "Optimálny výber podľa požiadaviek projektu"
    },
    {
        icon: FaExclamationTriangle,
        title: "Riadenie rizík",
        description: "Identifikácia a zmierňovanie rizík v stavebnom procese"
    },
    {
        icon: FaLightbulb,
        title: "Integrácia inovácií a technológií",
        description: "Implementácia moderných riešení pre efektívnejšiu výstavbu"
    },
    {
        icon: FaFileAlt,
        title: "Súlad s predpismi",
        description: "Zabezpečenie dodržiavania noriem a legislatívy"
    },
    {
        icon: FaUsers,
        title: "Vedenie tímu a školenie",
        description: "Koordinácia tímov a zvyšovanie odbornosti"
    }
]