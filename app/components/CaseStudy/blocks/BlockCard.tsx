import React from 'react';
import classNames from 'classnames';
import {getAssetCloud} from '@/app/utils/assets';
import styles from './BlockCard.module.scss';

interface BlockCardProps {
    id: number;
    title: string;
    description: string;
    type?: 'section' | 'image' | 'icon' | 'number';
    image?: string | null;
    section_title?: string | null;
    section_image?: string | null;
    text_align?: 'left' | 'center' | 'right';
    value?: string | null;
    layout?: 'row' | 'grid';
    isFirstCard?: boolean;
}

export const BlockCard: React.FC<BlockCardProps> = ({
                                                        title,
                                                        description,
                                                        type = 'image',
                                                        image,
                                                        section_title,
                                                        section_image,
                                                        text_align = 'center',
                                                        value,
                                                        layout = 'grid',
                                                        isFirstCard = false,
                                                    }) => {

    // Determine card style based on type
    const cardClassName = classNames({
        [styles.iconCard]: type === 'icon',
        [styles.numberCard]: type === 'number',
        [styles.defaultCard]: type !== 'icon' && type !== 'number',
        [styles.rowLayout]: layout === 'row',
        [styles.gridLayout]: layout === 'grid',
    });

    return (
        <div className={cardClassName}>
            {/* TYPE: SECTION - title, description, section_title, section_image */}
            {type === 'section' && (
                <>
                    {title && (
                        <div className={styles.title}>
                            <h3>{title}</h3>
                        </div>
                    )}
                    {description && (
                        <div className={styles.description}>
                            <p>{description}</p>
                        </div>
                    )}
                    {section_title && (
                        <div className={classNames(styles.sectionTitle, {
                            [styles.firstCard]: isFirstCard,
                            [styles.otherCard]: !isFirstCard,
                        })}>
                            <h3>{section_title}</h3>
                        </div>
                    )}
                    {section_image && (
                        <div className={styles.sectionImage}>
                            <img
                                src={getAssetCloud(section_image)}
                                alt={section_title || title}
                                className={styles.fullWidthImage}
                            />
                        </div>
                    )}
                </>
            )}

            {/* TYPE: IMAGE - image, title, description */}
            {type === 'image' && (
                <>
                    {image && (
                        <div className={styles.imageContainer}>
                            <img
                                src={getAssetCloud(image)}
                                alt={title}
                                className={styles.cardImage}
                            />
                        </div>
                    )}
                    {title && (
                        <div className={styles.title} style={{textAlign: text_align}}>
                            <h3>{title}</h3>
                        </div>
                    )}
                    {description && (
                        <div className={styles.description} style={{textAlign: text_align}}>
                            <p>{description}</p>
                        </div>
                    )}
                </>
            )}

            {/* TYPE: ICON - image, title, description */}
            {type === 'icon' && (
                <>
                    {image && (
                        <div className={styles.iconContainer}>
                            <img
                                src={getAssetCloud(image)}
                                alt=""
                                className={styles.cardIcon}
                            />
                        </div>
                    )}
                    {title && (
                        <div className={styles.title} style={{textAlign: text_align}}>
                            <h3>{title}</h3>
                        </div>
                    )}
                    {description && (
                        <div className={styles.description} style={{textAlign: text_align}}>
                            <p>{description}</p>
                        </div>
                    )}
                </>
            )}

            {/* TYPE: NUMBER - value/number, title, description */}
            {type === 'number' && (
                <>
                    {value && (
                        <div className={styles.numberBadgeWrapper} style={{textAlign: text_align}}>
                            <div className={styles.numberBadge}>
                                <span>{value}</span>
                            </div>
                        </div>
                    )}
                    {title && (
                        <div className={styles.title} style={{textAlign: text_align}}>
                            <h3>{title}</h3>
                        </div>
                    )}
                    {description && (
                        <div className={styles.description} style={{textAlign: text_align}}>
                            <p>{description}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
