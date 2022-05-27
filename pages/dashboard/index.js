import { Center } from '@chakra-ui/react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import DashboardLayout from '../../layouts/DashboardLayout';

function DashboardPage() {
  return (
    <Center>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardLayout>
        <h1>Dashbord</h1>
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
