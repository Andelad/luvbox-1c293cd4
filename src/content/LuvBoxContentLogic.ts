/**
 * LuvBox Content Logic - ROUGH DRAFT & CONCEPTUAL GUIDANCE
 * 
 * ⚠️  IMPORTANT: This file contains ROUGH COPY and CONCEPTUAL SKETCHES
 * ⚠️  DO NOT use this text directly in the UI - it needs refinement and polish
 * 
 * Purpose:
 * - Provides conceptual framework and logic for the app
 * - Helps understand the intention behind different elements
 * - Serves as a starting point for developing refined copy
 * - Documents the thinking behind relationship assessment areas
 * 
 * Use this file to understand:
 * - Core concepts and their rough definitions
 * - Relationship assessment framework
 * - General messaging direction and tone
 * - Structural patterns for content organization
 * 
 * For production-ready copy, refine and polish this content before implementation.
 */

// ============================================================================
// RELATIONSHIP ASSESSMENT AREAS
// ============================================================================

export interface RelationshipArea {
    key: string;
    label: string;
    shortDescription: string;
    longDescription: string;
    examples?: string[];
    importance: 'high' | 'medium' | 'low';
    conceptualNotes?: string; // For rough guidance and iterative improvement
}

/**
 * Core relationship assessment areas used throughout the app.
 * These map to the equalizer areas but provide rich content context.
 * 
 * ⚠️  NOTE: These descriptions are ROUGH DRAFTS for conceptual understanding.
 * Refine language, tone, and examples before using in production UI.
 */
export const RELATIONSHIP_AREAS: Record<string, RelationshipArea> = {
    personality: {
        key: 'communication', // Maps to EqualizerArea type
        label: 'Personality',
        shortDescription: 'How much you enjoy their characteristics, thoughts, and behaviour',
        longDescription: 'This covers their individual traits, quirks, sense of humor, and the authentic way they express themselves in the world. It\'s about whether you genuinely enjoy who they are as a person.',
        examples: ['Sense of humor', 'Communication style', 'Energy levels', 'Social tendencies', 'Intellectual curiosity'],
        importance: 'high'
    },

    physical_attraction: {
        key: 'physical_attraction',
        label: 'Physical Attraction',
        shortDescription: 'Your requirement for beauty and/or sexual attraction',
        longDescription: 'Physical chemistry, sexual attraction, and aesthetic appeal. This includes both immediate physical attraction and ongoing sexual compatibility.',
        examples: ['Initial physical appeal', 'Sexual chemistry', 'Physical compatibility', 'Attraction sustainability'],
        importance: 'high'
    },

    close_circle_vibes: {
        key: 'emotional_connection',
        label: 'Close Circle Vibes',
        shortDescription: 'How much you connect to the culture of their close circle, family or friends',
        longDescription: 'This concept is about your appreciation of their close circle. This could be family or friends. But it is about how much you like details about the way they live or the culture they are from. It is in essence their sense of \'homeliness\', perhaps combined with \'aspiration\'. This is only about your appreciation and attraction to their world, not whether it is a fit.',
        examples: ['Friend group compatibility', 'Family dynamics', 'Cultural background', 'Social environments', 'Home atmosphere'],
        importance: 'medium',
        conceptualNotes: 'USER GUIDANCE: Not about mutual fit, but about your attraction to their world. Focus on appreciation of their lifestyle, culture, homeliness + aspiration. Need to refine this concept further.'
    },

    values: {
        key: 'shared_values',
        label: 'Values',
        shortDescription: 'How aligned you are on core beliefs and life principles',
        longDescription: 'Fundamental beliefs about life, morality, priorities, and what matters most. These are the non-negotiable principles that guide major life decisions.',
        examples: ['Life philosophy', 'Political views', 'Religious beliefs', 'Ethical principles', 'Life priorities'],
        importance: 'high'
    },

    goals: {
        key: 'lifestyle_compatibility',
        label: 'Goals',
        shortDescription: 'How aligned your future dreams and ambitions are',
        longDescription: 'Alignment on future direction, life ambitions, and major life goals. This includes career aspirations, lifestyle desires, and shared vision for the future.',
        examples: ['Career ambitions', 'Family planning', 'Lifestyle goals', 'Travel aspirations', 'Financial objectives'],
        importance: 'medium'
    },

    behaviour: {
        key: 'future_goals',
        label: 'Behaviour',
        shortDescription: 'How they behave towards you and others, including good communication',
        longDescription: 'Day-to-day behavior patterns, how they treat you and others, conflict resolution style, communication patterns, and general interpersonal skills. This is about character in action.',
        examples: ['Kindness and respect', 'Communication style', 'Conflict resolution', 'Reliability', 'Emotional regulation', 'Social skills'],
        importance: 'high',
        conceptualNotes: 'USER GUIDANCE: Make it clear that communication is included in behaviour assessment.'
    },

    viability: {
        key: 'trust_respect',
        label: 'Viability',
        shortDescription: 'How feasible the relationship is; especially affected by money and proximity (low score is you need little from them)',
        longDescription: 'Practical considerations that affect relationship feasibility, with primary focus on financial stability and geographical proximity. These are the concrete, logistical factors that impact relationship sustainability.',
        examples: ['Geographic proximity', 'Financial compatibility', 'Time availability', 'Life stage alignment', 'Practical constraints'],
        importance: 'medium',
        conceptualNotes: 'USER GUIDANCE: Make it clearer - this is generally about money and proximity. Focus on concrete, practical barriers rather than abstract feasibility.'
    }
};

// ============================================================================
// CONTENT GUIDELINES & MESSAGING - ROUGH CONCEPTS
// ============================================================================

/**
 * Core messaging principles for LuvBox
 * 
 * ⚠️  These are CONCEPTUAL GUIDELINES, not final copy.
 * Use to understand direction and intent, then develop refined messaging.
 */
export const MESSAGING_PRINCIPLES = {
    tone: {
        primary: 'Warm, honest, and empowering',
        secondary: 'Direct but compassionate',
        avoid: 'Judgmental, overly clinical, or superficial'
    },

    approach: {
        philosophy: 'Relationships are complex and personal - we provide tools for self-awareness, not prescriptive answers',
        empowerment: 'Users are the experts on their own relationships',
        honesty: 'Encourage honest self-reflection, even when uncomfortable'
    },

    terminology: {
        // Preferred terms vs avoided terms
        preferred: {
            'dealbreaker lines': 'minimum standards or non-negotiables',
            'importance levels': 'priority levels or significance',
            'relationship areas': 'compatibility factors or relationship dimensions',
            'assessment': 'reflection or evaluation'
        },

        avoid: {
            'scoring people': 'Use "evaluating compatibility" instead',
            'perfect match': 'Use "strong compatibility" instead',
            'relationship test': 'Use "relationship reflection" instead'
        }
    }
};

/**
 * Feature-specific content guidance
 * 
 * ⚠️  DRAFT CONCEPTS: These explain the intent and logic behind features.
 * Develop proper UX copy based on these conceptual frameworks.
 */
export const FEATURE_CONTENT_GUIDANCE = {
    dealbreaker_sliders: {
        concept: 'Help users identify their minimum acceptable standards in different relationship areas',
        messaging: 'Frame as personal boundaries and self-awareness, not judgment of others',
        explanation: 'These represent your personal minimum standards - the lowest level you\'d be comfortable with in a potential partner',
        importance_language: {
            low: 'Low importance (flexible standards)',
            high: 'High importance (firm standards)'
        }
    },

    compatibility_assessment: {
        concept: 'Guide users through honest evaluation of current or potential relationships',
        messaging: 'Emphasize this is for self-reflection, not definitive judgment',
        explanation: 'Rate your honest assessment of how you experience this person in each area'
    },

    results_interpretation: {
        concept: 'Help users understand what their assessments mean',
        messaging: 'Provide insights while encouraging personal reflection and professional guidance when needed',
        disclaimer: 'These tools are for self-reflection and should not replace professional relationship counseling'
    }
};

// ============================================================================
// UI/UX CONTENT PATTERNS - PLACEHOLDER EXAMPLES
// ============================================================================

/**
 * Standard UI copy patterns used across the app
 * 
 * ⚠️  PLACEHOLDER COPY: These are basic examples to show patterns.
 * Develop actual UI copy with proper tone and brand voice.
 */
export const UI_COPY_PATTERNS = {
    buttons: {
        primary_action: 'Continue',
        secondary_action: 'Back',
        save: 'Save Changes',
        cancel: 'Cancel',
        complete: 'Complete Assessment'
    },

    form_validation: {
        required_field: 'This field is required',
        invalid_range: 'Please enter a value between {min} and {max}',
        save_success: 'Your changes have been saved',
        save_error: 'Unable to save changes. Please try again.'
    },

    loading_states: {
        saving: 'Saving your responses...',
        loading: 'Loading your assessment...',
        calculating: 'Calculating your compatibility...'
    },

    empty_states: {
        no_assessments: 'You haven\'t completed any assessments yet',
        no_results: 'Complete an assessment to see your results here'
    }
};

// ============================================================================
// EXPORT UTILITIES
// ============================================================================

/**
 * Get relationship area by key (maps to EqualizerArea type)
 */
export const getRelationshipArea = (key: string): RelationshipArea | undefined => {
    return Object.values(RELATIONSHIP_AREAS).find(area => area.key === key);
};

/**
 * Get all relationship areas as array
 */
export const getAllRelationshipAreas = (): RelationshipArea[] => {
    return Object.values(RELATIONSHIP_AREAS);
};

/**
 * Get relationship areas by importance level
 */
export const getRelationshipAreasByImportance = (importance: 'high' | 'medium' | 'low'): RelationshipArea[] => {
    return Object.values(RELATIONSHIP_AREAS).filter(area => area.importance === importance);
};

// ============================================================================
// VERSION & MAINTENANCE
// ============================================================================

/**
 * Content version for tracking changes and ensuring consistency
 */
export const CONTENT_VERSION = '1.0.0';

/**
 * Last updated date
 */
export const CONTENT_LAST_UPDATED = '2025-07-23';

/**
 * Notes for future updates:
 * - This entire file contains ROUGH DRAFTS and CONCEPTUAL FRAMEWORKS
 * - All copy needs refinement and polish before production use
 * - Review relationship area definitions based on user feedback
 * - Update messaging based on user research findings
 * - Expand examples based on common user questions
 * - Consider cultural sensitivity in messaging
 * - Develop proper brand voice and tone guidelines
 * - Create refined UX copy based on these concepts
 */
