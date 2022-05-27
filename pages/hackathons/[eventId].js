import HackathonDetailsComponent from '../../components/hackathon-details/HackathonDetailsComponent';

function HackathonDetailsPage() {
  return (
    <div>
      <HackathonDetailsComponent />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { eventId } = context.params;

  return {
    props: {},
  };
}

export default HackathonDetailsPage;
