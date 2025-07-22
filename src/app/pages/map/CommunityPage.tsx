import { PageHeader } from '@/app/components';
import React from 'react';

const CommunityPage: React.FC = () => {
    return (
        <div className="page-wrapper">
            <PageHeader
                breadcrumbs={['The Map', 'Community']}
            />
            <div className="empty-page-content">
                <div className="empty-page-inner">
                    <h2 className="page-title text-[32px] luvmap-brand">
                        Community
                    </h2>
                    <p className="page-subtitle">
                        The people around us shape our understanding and experience of love.
                    </p>
                    <div className="content-section">
                        <h3>Building Real Connections</h3>
                        <p>
                            Authentic community provides a supportive environment where we can explore questions about love and relationships without judgment. It offers perspectives that help us grow and understand ourselves better.
                        </p>

                        <h3>Shared Experiences</h3>
                        <p>Community allows us to:</p>
                        <ul>
                            <li>Learn from others' relationship experiences</li>
                            <li>Share our own insights and challenges</li>
                            <li>Find support during difficult times</li>
                            <li>Celebrate relationship milestones together</li>
                        </ul>

                        <h3>Growing Together</h3>
                        <p>
                            Community creates a space for mutual growth and learning. Through discussion, reflection, and shared wisdom, we can challenge our assumptions and develop new perspectives on love and connection.
                        </p>

                        <h3>Support Network</h3>
                        <p>
                            A strong community provides a foundation of support that can help us navigate the complexities of relationships, especially during major decisions, challenges, transitions, and moments of celebration.
                        </p>

                        <h3>Future Features</h3>
                        <p>
                            We're working on building community features that will allow LuvBox users to connect, share experiences, and support each other on their relationship journeys. Stay tuned for updates!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
