import { useRef, useEffect } from 'react';
import styles from './LanguageDropdown.module.scss';

interface Language {
  code: string;
  name: string;
}

interface LanguageDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
  onLanguageSelect: (languageCode: string) => void;
}

const languages: Language[] = [
  { code: 'ar', name: 'Arabic' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'it', name: 'Italian' },
  { code: 'ru', name: 'Russian' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'hi', name: 'Hindi' },
];

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
