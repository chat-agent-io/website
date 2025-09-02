import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './LanguageDropdown.module.scss';

interface Language {
  code: string;
  name: string;
  flagCode: string;
}

interface LanguageDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
  onLanguageSelect: (languageCode: string) => void;
}

const languages: Language[] = [
  { code: 'ar', name: 'Arabic', flagCode: 'sa' },
  { code: 'en', name: 'English', flagCode: 'gb' },
  { code: 'fr', name: 'French', flagCode: 'fr' },
  { code: 'it', name: 'Italian', flagCode: 'it' },
  { code: 'ru', name: 'Russian', flagCode: 'ru' },
  { code: 'es', name: 'Spanish', flagCode: 'es' },
  { code: 'de', name: 'German', flagCode: 'de' },
  { code: 'pt', name: 'Portuguese', flagCode: 'pt' },
  { code: 'zh', name: 'Chinese', flagCode: 'cn' },
  { code: 'ja', name: 'Japanese', flagCode: 'jp' },
  { code: 'ko', name: 'Korean', flagCode: 'kr' },
  { code: 'hi', name: 'Hindi', flagCode: 'in' },
];

const FlagIcon: React.FC<{ countryCode: string; alt: string }> = ({
  countryCode,
  alt,
}) => {
  return (
    <Image
      src={`https://flagcdn.com/w20/${countryCode}.png`}
      width={20}
      height={15}
      alt={alt}
      className={styles.flagIcon}
    />
  );
};
export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isOpen,
  onClose,
  selectedLanguage,
  onLanguageSelect,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageSelect(languageCode);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.dropdown} ref={dropdownRef}>
        <div className={styles.languageList}>
          {languages.map((language) => (
            <button
              key={language.code}
              className={styles.languageItem}
              onClick={() => handleLanguageSelect(language.code)}
            >
              <div className={styles.languageInfo}>
                <FlagIcon
                  countryCode={language.flagCode}
                  alt={`${language.name} flag`}
                />
                <span className={styles.languageName}>{language.name}</span>
              </div>
              <div
                className={`${styles.radioButton} ${
                  selectedLanguage === language.code ? styles.selected : ''
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
