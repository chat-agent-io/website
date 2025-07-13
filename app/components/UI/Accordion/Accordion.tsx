'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import styles from './Accordion.module.scss';

interface AccordionItemData {
  title: string;
  content: React.ReactNode;
  value: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  type?: 'single' | 'multiple';
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  type = 'single',
  className,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (value: string) => {
    const newOpenItems = new Set(openItems);

    if (type === 'single') {
      // Close all items first
      newOpenItems.clear();
      // Open the clicked item if it wasn't already open
      if (!openItems.has(value)) {
        newOpenItems.add(value);
      }
    } else {
      // Multiple mode - toggle the item
      if (newOpenItems.has(value)) {
        newOpenItems.delete(value);
      } else {
        newOpenItems.add(value);
      }
    }

    setOpenItems(newOpenItems);
  };

  return (
    <div className={`${styles.accordion} ${className || ''}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          item={item}
          isOpen={openItems.has(item.value)}
          onToggle={() => toggleItem(item.value)}
        />
      ))}
    </div>
  );
};

interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{item.title}</span>
        <ChevronDownIcon
          className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
        />
      </button>
      <div className={`${styles.content} ${isOpen ? styles.expanded : ''}`}>
        <div className={styles.contentInner}>{item.content}</div>
      </div>
    </div>
  );
};
