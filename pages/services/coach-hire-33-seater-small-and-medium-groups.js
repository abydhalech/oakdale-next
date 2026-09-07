export default function RetiredCoachHirePage() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/services/minibus-hire-16-seater',
      permanent: true,
    },
  };
}
