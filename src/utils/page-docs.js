import {v4 as uuidv4} from 'uuid';

export const pageDetails = [
    {
        id: uuidv4(),
        name: 'Virtual Customer Assistant',
        factsheet: 'vca_factsheet.pdf',
        slogan: 'Enable self-service, automate data discovery and cascade knowledge delivery throughout your organization',
        problems: [
            {
                id: uuidv4(),
                title: 'Customer Service Delays',
                explain: 'Delays occur when a customer cannot reach the right person quickly'
            },
            {
                id: uuidv4(),
                title: 'Inconsistent Customer Service delivery',
                explain: 'Customer agents are challenged to prioritize next steps in the customer lifecycle causing delays, inaccuracies, and inconsistent outcomes'
            },
            {
                id: uuidv4(),
                title: 'Lack of Knowledge Retention',
                explain: 'Manual processes & multiple data sources challenge customer service agents to quickly find the right information'
            },
        ],
        advantages: [
            {
                id: uuidv4(),
                title: 'Improved user engagement',
                explain: 'Personal and natural conversations improve user engagement and build trust',
            },
            {
                id: uuidv4(),
                title: '24/7 customer care',
                explain: 'AI-powered tools enable round-the-clock customer care to increase customer retention',
            },
            {
                id: uuidv4(),
                title: 'Automated processes',
                explain: 'Unprecedented customer support automation eliminates potential human errors',
            }
        ],
        features: [
            {
                id: uuidv4(),
                title: 'Sentiment Analyzer',
                explain: 'Analyzes text for tone, intent and attitude',
                cube: 'vca1.svg',
            },
            {
                id: uuidv4(),
                title: 'Style Transformer',
                explain: 'Highlights & tags contextual dependencies for review',
                cube: 'vca2.svg',
            },
            {
                id: uuidv4(),
                title: 'Information Recommender',
                explain: 'Presents content based on customer behavior & profiles',
                cube: 'vca3.svg',
            },
            {
                id: uuidv4(),
                title: 'Discrepancy Reviewer',
                explain: 'Identifies similarities & discrepancies',
                cube: 'vca4.svg',
            },
            {
                id: uuidv4(),
                title: 'Subject Matter Expert – Q&A',
                explain: 'Answers questions based on reviewed text',
                cube: 'vca5.svg',
            },

        ]
    },
    {
        id: uuidv4(),
        name: 'Virtual Claims Processor',
        factsheet: 'vcp_factsheet.pdf',
        slogan: 'Manage and Optimize the entire lifecycle of a claim - from early assessment through investigation and closure',
        problems: [
            {
                id: uuidv4(),
                title: 'Fraud',
                explain: 'Claimant fraud causes a strain on claims management processes and valuable time is spent on analyzing fraud'
            },
            {
                id: uuidv4(),
                title: 'Inconsistent service delivery',
                explain: 'Human bias in claims processing results in delays, inaccuracies, and manual decision making - leading to inconsistent outcomes in claims handling services'
            },
            {
                id: uuidv4(),
                title: 'Lack of operational inefficiency',
                explain: 'Manual processes create errors and delays, leading to missed billing opportunities while exacerbating operational costs'
            },
        ],
        advantages: [
            {
                id: uuidv4(),
                title: 'Optimization',
                explain: 'Enhance predictability and optimization of the entire lifecycle of a claim - from early assessment through investigation and closure.',
            },
            {
                id: uuidv4(),
                title: 'Prediction',
                explain: 'Analyze thousands of data points to determine optimal pricing while simultaneously detecting fraudulent activities.',
            },
            {
                id: uuidv4(),
                title: 'Automation',
                explain: 'Efficiency is created by automating insurance claims case management processes and operating costs are reduced for manual processing.',
            },
        ],
        features: [
            {
                id: uuidv4(),
                title: 'Image Analyzer',
                explain: 'Identifies key attributes in an image',
                cube: 'vcp1.svg',
            },
            {
                id: uuidv4(),
                title: 'Image Annotator',
                explain: 'Tags and classifies image assets for easy retrieval',
                cube: 'vcp2.svg',
            },
            {
                id: uuidv4(),
                title: 'Document Classifier',
                explain: 'Classifies documents by type and category',
                cube: 'vcp3.svg',
            },
            {
                id: uuidv4(),
                title: 'Discrepancy Reviewer',
                explain: 'Identifies discrepancies & deviations from the norm',
                cube: 'vcp4.svg',
            },
            {
                id: uuidv4(),
                title: 'Critical Data Tagger',
                explain: 'Identifies and tags key data elements',
                cube: 'vcp5.svg',
            },
        ]

    },
    {
        id: uuidv4(),
        name: 'Virtual Clinical Imaging Analyst',
        slogan: 'Improve the accuracy of image analysis',
        factsheet: 'vcia_factsheet.pdf',
        problems: [
            {
                id: uuidv4(),
                title: 'Exponential Growth in Data',
                explain: 'High volumes of data extend the medical imaging review process leading to clinician fatigue and burnout'
            },
            {
                id: uuidv4(),
                title: 'Human-related diagnostic errors',
                explain: 'Human limitations in sight and interpretation are compounded by a lack of data interoperability, leading to diagnostic errors and oversights'
            },
            {
                id: uuidv4(),
                title: 'Quality Control',
                explain: 'Errors and limitations in image quality can create challenges in interpretation'
            },
        ],
        advantages: [
            {
                id: uuidv4(),
                title: 'Efficiency',
                explain: 'Healthcare specialists using -computer guided image analysis improves diagnostic confidence and patient outcomes, reducing the cost of care.',
            },
            {
                id: uuidv4(),
                title: 'Process automation',
                explain: 'The automation, mining, and structuring of data is enabled by leveraging AI in medical imaging technology.',
            },
            {
                id: uuidv4(),
                title: 'Real-Time medical imaging',
                explain: 'AI algorithms are deployed to speed up the process of identifying patterns and abnormalities in real-time, surpassing the ability of human radiologists.',
            },
            {
                id: uuidv4(),
                title: 'Accuracy & Speed',
                explain: 'Regular medical images are reconstructed into 3D imaging through AI and machine learning - making diagnosis more accurate and faster than human diagnosis',
            }
        ],
        features: [
            {
                id: uuidv4(),
                title: 'Image Annotation',
                explain: 'Associates an entire image, or a section of an image, with a unique identifier for easy and coordinated retrieval',
                cube: 'vcia1.svg',
            },
            {
                id: uuidv4(),
                title: 'Image Recognition',
                explain: 'Analyzes customer and agent-provided images to assess physical damage and estimate claims',
                cube: 'vcia2.svg',
            },
            {
                id: uuidv4(),
                title: 'Pattern Recognition',
                explain: 'Classifies data and identifies clusters of patterns using unsupervised learning',
                cube: 'vcia3.svg',
            },
            {
                id: uuidv4(),
                title: 'Anomaly Detection',
                explain: 'Identifies data points, events, and/or observations that deviate from normal behaviours',
                cube: 'vcia4.svg',
            },
        ]

    },
    {
        id: uuidv4(),
        name: 'Virtual Data Steward',
        factsheet: 'vds_factsheet.pdf',
        slogan: 'Apply consistent business definitions, connect business terms to technical data, complete lineage and identify critical data elements.',
        problems: [
            {
                id: uuidv4(),
                title: 'Regulatory Oversight',
                explain: 'Corporations need to demonstrate control, insight, and ownership of their data'
            },
            {
                id: uuidv4(),
                title: 'Exponential Growth',
                explain: 'Organizations are seeing data grow at rates of 23-40%, meaning data assets will double every 24-40 months'
            },
            {
                id: uuidv4(),
                title: 'Manual Interventions',
                explain: 'Lack of standard taxonomy and well-documented mappings of business terms to technical data elements requires significant manual interventions'
            },
            {
                id: uuidv4(),
                title: 'Complex IT Landscape',
                explain: 'Maintaining legacy systems while staying up-to-date with new technologies creates a complex landscape for identifying transformations and truth in data'
            },
            {
                id: uuidv4(),
                title: 'Unstructured Data ecosystem',
                explain: 'Data is trapped in Visio, PDFs, images, free text fields and in semi-structured files like Excel, Word and text editors'
            },
            {
                id: uuidv4(),
                title: 'Business constraints',
                explain: 'Unstructured data consumes large storage capacity whilst trapping business value for broader consumption'
            },
        ],
        advantages: [
            {
                id: uuidv4(),
                title: 'Less duplication and manual manipulation of data',
                explain: 'Intelligent data management is more accurate and requires less human intervention and re-work',
            },
            {
                id: uuidv4(),
                title: 'Quality & Reliability',
                explain: 'Properly executed data stewardship improves quality and reliability, increasing accuracy and trust in the data analysis process',
            },
            {
                id: uuidv4(),
                title: 'Improved decision-making',
                explain: 'Data is aggregated and organized to uncover valuable insights throughout the enterprise',
            },
        ],
        features: [
            {
                id: uuidv4(),
                title: 'Pattern Detector',
                explain: 'Identifies patterns, relations and clusters in data',
                cube: 'vds1.svg',
            },
            {
                id: uuidv4(),
                title: 'Gap Stitcher',
                explain: 'Identifies similarities and discrepancies in relationships and lineage and recommends solutions',
                cube: 'vds2.svg',
            },
            {
                id: uuidv4(),
                title: 'Recommendation Engine',
                explain: 'Suggests connections between business concepts and technical terms',
                cube: 'vds3.svg',
            },
            {
                id: uuidv4(),
                title: 'Critical Data Tagger',
                explain: 'Identifies and tags key meta-data and data elements',
                cube: 'vds4.svg',
            },
            {
                id: uuidv4(),
                title: 'Subject Matter Expert',
                explain: 'Answers questions based on reviewed text',
                cube: 'vds5.svg',
            },
            {
                id: uuidv4(),
                title: 'Text Summarizer',
                explain: 'Summarizes important documents at a click of a button',
                cube: 'vds6.svg',
            },
        ]

    },
    {
        id: uuidv4(),
        name: 'Virtual Systems Integrator',
        slogan: 'Expand the scope of Data lineage and reduce manual mapping',
        factsheet: 'vsi_factsheet.pdf',
        problems: [
            {
                id: uuidv4(),
                title: 'Inefficient Data Architecture',
                explain: 'Multiple data stores with no common data model, legacy systems, complex lineage'
            },
            {
                id: uuidv4(),
                title: 'Lack of front-office controls',
                explain: 'Poor quality of data capture at system of origin with limited validation'
            },
            {
                id: uuidv4(),
                title: 'The value of Data Transformation',
                explain: 'Data seen as an IT issue, not a valuable business asset'
            },
            {
                id: uuidv4(),
                title: 'Gap Stitching',
                explain: 'Mis-handled manual gap stitching exacerbates errors and data quality'
            },
        ],
        advantages: [
            {
                id: uuidv4(),
                title: 'Data Transformation',
                explain: 'Corporations can comply with regulations by contextualizing their data around key business drivers',
            },
            {
                id: uuidv4(),
                title: 'Data Governance',
                explain: 'Accurate, complete and trustworthy data is used to empower business decisions and extend reach',
            },
            {
                id: uuidv4(),
                title: 'Regulatory Compliance',
                explain: 'Data is aggregated and organized Regulatory compliance efforts are supported by tracking how data flows through systems from source to destination',
            },
        ],
        features: [
            {
                id: uuidv4(),
                title: 'Pattern Detector',
                explain: 'Identifies patterns, relations and clusters in data',
                cube: 'vsi1.svg',
            },
            {
                id: uuidv4(),
                title: 'Dependency Parser',
                explain: 'Recognizes semantic and contextual dependencies',
                cube: 'vsi2.svg',
            },
            {
                id: uuidv4(),
                title: 'Anomaly Detector',
                explain: 'Identifies deviations in data points and events',
                cube: 'vsi3.svg',
            },
            {
                id: uuidv4(),
                title: 'Gap Stitcher',
                explain: 'Recognizes and presents solutions to lineage gaps',
                cube: 'vsi4.svg',
            },
        ]

    }
]

export const teamMemberDetails = [
    {
        name: 'Thomas S. Gustinis',
        role: 'Chief Executive Officer',
        image: 'thomas.png',
        linkedIn: 'https://www.linkedin.com/in/thomas-gustinis-5188b91/',
    },
    {
        name: 'Bernhard Janischowsky',
        role: 'Chief Sales & Marketing Officer',
        image: 'bernie.png',
        linkedIn: 'https://www.linkedin.com/in/bernhard-janischowsky-545aa3/',
    },
    {
        name: 'Beth Mosier',
        role: 'Chief Operating Officer',
        image: 'beth.png',
        linkedIn: 'https://www.linkedin.com/in/beth-mosier-innovation/',
    },
    {
        name: 'Jon Kaufman',
        role: 'Chief Product Officer',
        image: 'jon.png',
        linkedIn: 'https://www.linkedin.com/in/jpkaufman/',
    },
    {
        name: 'Matt DeFouw',
        role: 'Chief Technical Officer',
        image: 'matt.png',
        linkedIn: 'https://www.linkedin.com/in/mdefouw/',
    },
    {
        name: 'Reid Anderson',
        role: 'Country Head Germany',
        image: 'reid.png',
        linkedIn: 'https://www.linkedin.com/in/reidandersoningermany/',
    },
    {
        name: 'Zeeshan Khalid',
        role: 'Country Head United Kingdom',
        image: 'zeeshan.png',
        linkedIn: 'https://www.linkedin.com/in/khalidze/',
    },
    {
        name: 'Erik Gillet',
        role: 'Country Head Switzerland',
        image: 'erik.png',
        linkedIn: 'https://www.linkedin.com/in/erikgillet/',
    },
    {
        name: 'Jaymes Bearden',
        role: 'Technology Lead',
        image: 'jaymes.png'
    },
    {
        name: 'Krisztián Pozsa',
        role: 'Senior Software Engineer',
        image: 'kris.png'
    },
    {
        name: 'Mina Fimic',
        role: 'Data Scientist',
        image: 'mina.png'
    },
    {
        name: 'Maya Vujanic',
        role: 'Digital Marketing Specialist',
        image: 'maya.png'
    },
]

export const teamMemberDetails2 = [
    {
        name: 'Sara Durovic',
        role: 'Graphic & Animation Designer',
        image: 'sara.png'
    },
    {
        name: 'Samuel Abbey',
        role: 'Intern',
        image: 'samuel.png'
    },
]

export const caseStudy = [
    {
        name: '4 health',
        id: uuidv4(),
        docs: [
            {
                id: uuidv4(),
                doc_name: 'case1.pdf',
                image: 'health1.png',
            },
            {
                id: uuidv4(),
                doc_name: 'case2.pdf',
                image: 'health2.png',
            },
            {
                id: uuidv4(),
                doc_name: 'case3.pdf',
                image: 'health3.png',
            },
            {
                id: uuidv4(),
                doc_name: 'case4.pdf',
                image: 'health4.png',
            },
            {
                id: uuidv4(),
                doc_name: 'case5.pdf',
                image: 'apteryx_case_study.png',
            },
            {
                id: uuidv4(),
                doc_name: 'case6.pdf',
                image: 'dwp_case_study.png',
            },
        ]
    },
]

export const challengesDocs = [
    {
        title: '4th-IR People Counter Virtual Challenge',
        summary: 'This is a call to idea innovators in Serbia to compete by creating ' +
            'a prototype that counts people entering and exiting a commercial establishment via a ' +
            'network of cameras stationed throughout the environment.',
        duration: 'Open until: January 30th, 2021.',
        link: '/people-counter',
        image: 'challenge1.png',
        alt: 'people counter'
    }
]
