import { PageHeader } from '@/app/components';
import React from 'react';

const LuvBoxInfoPage: React.FC = () => {
    return (
        <div className="page-wrapper">
            <PageHeader
                breadcrumbs={['The Map', 'The LuvBox']}
            />
            <div className="empty-page-content">
                <div className="empty-page-inner">
                    <h2 className="page-title text-[32px] luvmap-brand">
                        The LuvBox
                    </h2>
                    <p className="page-subtitle">
                        Your diagnostic tool for dating and love. Learn how to use the LuvBox Cube to explore different aspects of your relationships.
                    </p>
                    <div className="content-section">
                        <h3>How to Use the LuvBox Cube</h3>
                        <p>
                            The LuvBox Cube is a powerful tool designed to help you navigate and understand your relationships. By visualizing different aspects of love and connection, the cube provides insights that can guide your decisions and enhance your experiences.
                        </p>

                        <h3>Setting Up Your Cube</h3>
                        <p>To get started with the LuvBox Cube, follow these steps:</p>
                        <ul>
                            <li>Complete the initial assessment to personalize your cube</li>
                            <li>Navigate to the Cube section from the main menu</li>
                            <li>Begin exploring its features and insights</li>
                        </ul>

                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Interactive Visualization:</strong> Rotate and explore the cube to see different aspects of your relationship</li>
                            <li><strong>Personalized Insights:</strong> Receive tailored advice based on your assessment results</li>
                            <li><strong>Progress Tracking:</strong> Monitor changes and improvements over time</li>
                            <li><strong>Resource Library:</strong> Access articles, videos, and tools to support your relationship journey</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuvBoxInfoPage;
