import { PageHeader } from '@/app/components';
import React from 'react';

const SelfPage: React.FC = () => {
    return (
        <div className="page-wrapper">
            <PageHeader
                breadcrumbs={['The Map', 'Myself']}
            />
            <div className="empty-page-content">
                <div className="empty-page-inner">
                    <h2 className="page-title text-[32px] luvmap-brand">
                        Myself
                    </h2>
                    <p className="page-subtitle">
                        Understanding yourself is the foundation of healthy relationships.
                    </p>
                    <div className="content-section">
                        <h3>The Intelligence of Your Gut</h3>
                        <p>
                            Your intuition is a powerful tool in relationships. It processes countless subtle cues and experiences to provide insights that your conscious mind might miss.
                        </p>

                        <h3>Your Unique Perspective</h3>
                        <p>
                            Everyone brings their own unique perspective to relationships based on their experiences, values, and personal growth. Understanding your perspective helps you:
                        </p>
                        <ul>
                            <li>Recognize your relationship patterns</li>
                            <li>Understand your emotional responses</li>
                            <li>Identify areas for growth</li>
                            <li>Communicate your needs effectively</li>
                        </ul>

                        <h3>Trusting Your Direction</h3>
                        <p>
                            Learning to trust yourself in relationships means balancing intuition with rational thinking, understanding your values, and being honest about your needs and boundaries.
                        </p>

                        <h3>A Living Partnership</h3>
                        <p>
                            The relationship you have with yourself sets the foundation for all other relationships. By understanding and nurturing this relationship, you create the capacity for deeper, more authentic connections with others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelfPage;
