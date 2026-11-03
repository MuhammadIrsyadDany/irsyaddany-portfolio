export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  education: string;
  gpa: string;
  honor?: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Muhammad Irsyad Dany',
  title: 'Web Developer',
  location: 'Gresik, East Java, Indonesia',
  email: 'irsyaddany.works@gmail.com',
  github: 'https://github.com/MuhammadIrsyadDany',
  linkedin: 'https://linkedin.com/in/muhammadirsyaddany',
  instagram: 'https://www.instagram.com/rsydanyy',
  education: 'State Polytechnic of Malang (Polinema)',
  gpa: '3.62 / 4.00',
};