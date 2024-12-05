import { FileChartLine, Stethoscope, LayoutDashboard } from 'lucide-react';

//  This contains sidebar navigation items.
// use lowercase when setting url paths
// use JSX icons as icons
//  use - in url path when there is more than one word in the path segment
//  name : Financial Reports     ----->  path: /doctor/financial-reports

export const data = {
  navWithSub: [
    {
      title: 'Reports',
      url: '',
      icon: FileChartLine,
      isActive: true,
      items: [
        {
          name: 'Appointment Reports',
          url: '/doctor/appointment-reports',
        },
        {
          name: 'Patient Reports',
          url: '/doctor/patient-reports',
        },
        {
          name: 'Financial Reports',
          url: '/doctor/financial-reports',
        },
      ],
    },
  ],
  navMain: [
    {
      name: 'Overview',
      url: '/doctor',
      icon: LayoutDashboard,
    },
    {
      name: 'Examination',
      url: '/doctor/examination',
      icon: Stethoscope,
    },
  ],
};
