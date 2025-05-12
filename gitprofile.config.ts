// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'vigneshlal', // Your GitHub org/vignesh-lal. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['vignesh-lal/Microbiome-Analysis-with-QIIME2-Vignesh-Lal', 'vignesh-lal/Microbiome-Bioinformatics'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Project',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI in Biotechnology',
          description:
            'Current uses of AI in biotechnology and the possible future along with softwares used in different feilds.',
          imageUrl:
            'https://github.com/Vignesh-Lal/vignesh-lal.github.io/raw/main/Screenshot%202025-04-30%20091945.png',
          link: 'https://example.com',
        },
        {
          title: 'De novo transcriptome profiling unveils the regulation of phenylpropanoid biosynthesis in unripe Piper nigrum berries',
          description:
            'Transcriptome De Novo of Black Pepper',
          imageUrl:
            'https://github.com/Vignesh-Lal/vignesh-lal.github.io/blob/main/Screenshot%202025-04-30%20112405.png',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Vignesh Lal',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://github.com/Vignesh-Lal/vignesh-lal.github.io/blob/main/LalCV2.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Genetic Biotechnology',
    'Transcriptomics',
    'Parasitology',
    'Microbiome analysis',
    'Forensics Biotechnology',
  ],
  experiences: [
    {
      company: 'California State Unviersity of Stanislaus',
      position: 'Research Assistant',
      from: '2024',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Study Abroad Program',
      body: 'Cultural and Experiential Learning Course',
      year: '2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University of Stanislaus',
      degree: 'Bachelors Degree in Biology',
      from: '2020',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Draft genome sequence of Phascolarctobacterium faecium DSM 14760 isolated from koala feces in Australia',
      conferenceName: '',
      journalName: 'Microbiology resource Annoucment',
      authors: 'Ciara Blanco, Vignesh Lal, Evelyn Valdovinos, Alan Vinzant',
      link: 'https://github.com/Vignesh-Lal/vignesh-lal.github.io/raw/main/prokaryotic-eukaryotic_genome%20JGI%20Project%20G6.pdf',
      description:
        'Manuscript is in submission. Phascolarctobacterium faecium was originally isolated from koala feces in 1992. Here, we sequence and analyze the type strain, with a length of 2,317,131 bp, 27 contigs, and average G+C content of 43.73%, and three virulence factors that are potential health hazards to humans.',
    },
    {
     title: 'Draft Genome of Rhizobium oryzhabitans associated with yellow green 4 alga Vaucheria bursata',
      conferenceName: '',
      journalName: 'Microbiology resource Annoucment',
      authors: 'Gerardo Laureano, Vignesh Lal, Laurel Mitchell, Elizabeth Santillan Olea, Joseph Tovar, Ashley Scoles, Alok Arun',
      link: 'https://github.com/Vignesh-Lal/vignesh-lal.github.io/raw/main/MRA00473-25-Manuscript_Text_File.pdf',
      description:
        'Manuscript is in submission. We present a draft metagenome-assembled genome (MAG) of a Rhizobium species 19 derived from the sequenced genome of Vaucheria bursata. The MAG is 89.8% complete, with 4,289 ORFs and 2,002 annotated genes. Investigating its function will enhance understanding of bacteria-algae interactions and their role within the Vaucheria microbiome',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
