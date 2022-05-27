import { getSession } from 'next-auth/react';
import NewEventForm from '../../components/dashboard/NewEvent/NewEventForm';

function NewEventPage() {
  return (
    <div>
      <NewEventForm />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

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

export default NewEventPage;
