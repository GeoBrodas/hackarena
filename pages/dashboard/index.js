import { Button, Center, HStack } from '@chakra-ui/react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import DashboardLayout from '../../layouts/DashboardLayout';

import { AiOutlinePlus } from 'react-icons/ai';
import HackathonsByOrg from '../../components/dashboard/HackathonsByOrg';
import Link from 'next/link';

function DashboardPage() {
  return (
    <Center>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardLayout>
        {/* Admin Board */}
        <HStack>
          <Link href="/dashboard/new-event">
            <Button leftIcon={<AiOutlinePlus />}>New Event</Button>
          </Link>
        </HStack>

        {/* List of hackathons the organiser has created */}
        <HackathonsByOrg />
      </DashboardLayout>
    </Center>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: {},
  };
}

export default DashboardPage;
