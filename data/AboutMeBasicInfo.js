// icons
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
} from "lucide-react";

const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};

export const AboutMeBasicInfo = [
    {
        icon: <User2 size={20} />,
        text: "Bhuvan A R",
    },
    {
        icon: <Calendar size={20} />,
        text: `${calculateAge('2005-01-01')} years old`,
    },
    {
        icon: <MailIcon size={20} />,
        text: "bhuvanamaravathi@gmail.com",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "B.E in AI & ML",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Bengaluru, Karnataka",
    },
];