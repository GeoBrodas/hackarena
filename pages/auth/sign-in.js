import { Button, Center, Stack, Text, VStack } from '@chakra-ui/react';
import { getSession, signIn } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

import { BsGithub, BsReverseBackspaceReverse } from 'react-icons/bs';

function SignInPage() {
  return (
    <Center
      style={{
        height: '100vh',
        backgroundImage: 'url(/svg/bg.svg)',
      }}
    >
      <Head>
        <title>SignUp!</title>
      </Head>

      <VStack
        style={{
          width: '35%',
          backgroundColor: '#fff',
          height: '50%',
        }}
        rounded="lg"
        paddingX="30px"
        alignItems="center"
        justify="center"
      >
        <Text fontWeight={'bold'} fontSize={'2xl'} color="linkedin.500">
          LogIn
        </Text>

        <Text textAlign={'center'}>
          We keep your information safe and secure. We will never share your
          data with anyone.
        </Text>

        <Text fontWeight={'light'}>New to EvenForms? Sign in using Github</Text>

        <Button
          leftIcon={<BsGithub />}
          onClick={() => signIn('github')}
          width={'30%'}
          style={{
            marginTop: '20px',
          }}
          bg={'twitter.100'}
          _hover={{
            bg: 'twitter.300',
          }}
        >
          GitHub
        </Button>

        <Link href="/">
          <Button
            leftIcon={<BsReverseBackspaceReverse />}
            width={'30%'}
            style={{
              marginTop: '20px',
            }}
            bg={'twitter.100'}
            _hover={{
              bg: 'twitter.300',
            }}
          >
            Go back
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: {},
  };
}

export default SignInPage;
