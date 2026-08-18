export interface TeamMember {
  id: string
  placeholder: string
  name: string
  role: string
  contribution: string
  github?: string
  linkedin?: string
  photo?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '01',
    placeholder: 'TEAM MEMBER 01',
    name: 'Rohit jain',
    role: 'Team Leader & DevOps Engineer',
    contribution: 'Backend & Systems Architecture',
    github: 'https://github.com/rohit-jain-546',
    linkedin: 'https://www.linkedin.com/in/546-rohit-jain/',
    photo: '/team/rohit.jpg',
  },
  {
    id: '02',
    placeholder: 'TEAM MEMBER 02',
    name: 'Avanish Padhy',
    role: 'Frontend & UI/UX Developer',
    contribution: 'Frontend & UI experience',
    github: 'https://github.com/avanishp-dev',
    linkedin: 'https://www.linkedin.com/in/avanishpadhy-dev/',
    photo: '/team/avanish.jpg',
  },
  {
    id: '03',
    placeholder: 'TEAM MEMBER 03',
    name: 'Swadhin Dibyajyoti',
    role: 'Backend & 3-D Visualisation',
    contribution: 'Backend & 3-D Visualisation',
    github: 'https://github.com/jyotiswadhindibya-bit',
    linkedin: 'https://www.linkedin.com/in/swadhin-dibya-jyoti/',
    photo: '/team/swadhin.jpg',
  },
  {
    id: '04',
    placeholder: 'TEAM MEMBER 04',
    name: 'Sahil K Sahoo',
    role: 'IoT Engineer',
    contribution: 'IoT & Real-Time Systems',
    github: 'https://github.com/Sahil-k-Sahoo',
    linkedin: 'https://www.linkedin.com/in/sahil-k-sahoo/',
    photo: '/team/sahil.jpg',
  },
  {
    id: '05',
    placeholder: 'TEAM MEMBER 05',
    name: 'Ritisha Sahoo',
    role: 'AI/ML Developer',
    contribution: 'AI/ML & Computer Vision',
    github: 'https://github.com/ritisha34',
    linkedin: 'https://www.linkedin.com/in/ritisha-sahoo-67a046364/',
    photo: '/team/ritisha.jpg',
  },
  {
    id: '06',
    placeholder: 'TEAM MEMBER 06',
    name: 'Arpita Padhi',
    role: 'AL/ML Developer',
    contribution: 'AI/ML & Computer Vision',
    github: 'https://github.com/codes-by-arpita',
    linkedin: 'https://www.linkedin.com/in/arpita-padhi-dev/',
    photo: '/team/arpita.jpg',
  },
]
