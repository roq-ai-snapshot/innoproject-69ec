import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['BusinessOwner'];
  const roles = ['BusinessOwner', 'ProjectManager', 'TeamLead', 'Admin', 'Employee'];
  const applicationName = 'InnoProject';
  const tenantName = 'Business Organization';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `BusinessOwner:
1. As a BusinessOwner, I want to be able to create and manage multiple projects within my organization so that I can keep track of all ongoing projects and their progress.
2. As a BusinessOwner, I want to be able to assign ProjectManagers to specific projects so that they can oversee and manage the project effectively.
3. As a BusinessOwner, I want to have an overview of all the resources allocated to different projects so that I can ensure optimal resource utilization.
4. As a BusinessOwner, I want to be able to view and analyze project performance metrics so that I can make informed decisions about project direction and resource allocation.
5. As a BusinessOwner, I want to be able to set access permissions for different users within the organization so that sensitive information is protected.

ProjectManager:
1. As a ProjectManager, I want to be able to create and manage tasks within a project so that I can ensure the project progresses as planned.
2. As a ProjectManager, I want to be able to assign tasks to TeamLeads and Employees so that work is distributed effectively.
3. As a ProjectManager, I want to be able to track the progress of tasks and projects so that I can ensure deadlines are met and resources are utilized efficiently.
4. As a ProjectManager, I want to be able to communicate with TeamLeads and Employees within the platform so that I can provide guidance and address any issues that arise.
5. As a ProjectManager, I want to be able to generate reports on project progress and resource utilization so that I can provide updates to the BusinessOwner.

TeamLead:
1. As a TeamLead, I want to be able to view and manage tasks assigned to me and my team so that I can ensure work is completed on time and to a high standard.
2. As a TeamLead, I want to be able to communicate with my team members and the ProjectManager within the platform so that I can provide updates and address any issues that arise.
3. As a TeamLead, I want to be able to track the progress of tasks assigned to my team so that I can ensure deadlines are met and resources are utilized efficiently.
4. As a TeamLead, I want to be able to request additional resources or support from the ProjectManager if needed so that my team can complete tasks effectively.

Admin:
1. As an Admin, I want to be able to manage user accounts and access permissions within the organization so that the right people have access to the right information.
2. As an Admin, I want to be able to manage and allocate resources within the organization so that projects can be completed efficiently.
3. As an Admin, I want to be able to assist the BusinessOwner and ProjectManager with generating reports and analyzing project performance metrics so that informed decisions can be made.

Employee:
1. As an Employee, I want to be able to view and manage tasks assigned to me so that I can complete my work on time and to a high standard.
2. As an Employee, I want to be able to communicate with my TeamLead and ProjectManager within the platform so that I can ask questions, provide updates, and address any issues that arise.
3. As an Employee, I want to be able to track my progress on tasks and projects so that I can ensure I am meeting deadlines and contributing effectively to the project.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
