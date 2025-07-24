import { PageHeader } from '@/app/components';
import React from 'react';

const ScriptsPage: React.FC = () => {
    return (
        <div className="page-wrapper">
            <PageHeader
                breadcrumbs={['The Map', 'My Scripts']}
            />
            <div className="empty-page-content">
                <div className="empty-page-inner">
                    <h2 className="page-title text-[32px] luvmap-brand">
                        My Scripts
                    </h2>
                    <p className="page-subtitle">
                        Explore and understand the love narratives that shape your relationships.
                    </p>
                    <div className="content-section">
                        <h3>Understanding Your Love Narratives</h3>
                        <p>
                            Love narratives are the stories we tell ourselves about love, relationships, and what they should look like. These scripts influence our expectations, behaviors, and interpretations of romantic experiences.
                        </p>

                        <h3>How Scripts Work</h3>
                        <p>Your love narratives are shaped by:</p>
                        <ul>
                            <li>Past relationship experiences</li>
                            <li>Cultural and family influences</li>
                            <li>Media representations of love</li>
                            <li>Personal values and beliefs</li>
                        </ul>

                        <h3>Identifying Your Scripts</h3>
                        <p>
                            By completing our assessment, you can discover which love narratives resonate most with you and understand how they influence your relationship choices.
                        </p>

                        <div className="mt-8">
                            <p >
                                Complete the dealbreakers assessment and narrative ranking to see your personalized results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScriptsPage;
