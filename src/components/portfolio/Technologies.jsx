
const Technologies = ({data}) => {
  return (
    <a href={data.docs} target="_blank">
      <img src={data.stack} alt={data.name} />
    </a>
  );
}

export default Technologies;
