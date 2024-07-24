import { FunctionComponent, ReactNode, createContext, useContext, useState } from "react";
import vi from "./vi.json";
import en from "./en.json";
import ch from "./ch.json";
import ja from "./ja.json";

interface ITranslation {
    [key: string]: string;
}

export interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => any;
    i18n: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: { [key: string]: ITranslation } = {
    en,
    vi,
    ch,
    ja
}

export const LanguageProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('vi');

    const i18n = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, i18n }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// const resources = {
//     vi,
//     en,
//     ch,
//     ja
// };

// i18n
//     .use(initReactI18next)
//     .init({
//         resources,
//         lng: "vi",
//         interpolation: {
//             escapeValue: false
//         }
//     });

// export default i18n;
