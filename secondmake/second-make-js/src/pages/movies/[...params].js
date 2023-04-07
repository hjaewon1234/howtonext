import Seo from "@/components/Seo";

const Detail = ({ params }) => {
  const [title, id] = params;
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}

// export function getServerSideProps(ctx) {
//   console.log(ctx);
//   return {
//     props: {},
//   };
// }
