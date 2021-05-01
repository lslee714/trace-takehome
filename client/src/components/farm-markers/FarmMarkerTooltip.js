import Table from 'react-bootstrap/Table';


const FarmMarkerToolTipComponent = (props) => {
  const { farm } = props;

  return (
    <>
      <article className='farm-header d-flex'>
        <label className='font-weight-bold'>{ farm.name }</label>
        <label className='font-weight-bold ml-auto'>{ farm.soil_type }</label>
      </article>
      <Table striped bordered>
        <thead>
          <tr>
            <th>
              Field
            </th>
            <th>
              Crop
            </th>
            <th>
              Size (acres)
            </th>
          </tr>
        </thead>
        <tbody>
        {
          Object.entries(farm.fields).map(
            ([name, field], idx) =>
              <tr key={idx}>
                <td>{name}</td>
                <td>{field.crop}</td>
                <td>{field["size (acres)"]}</td>
              </tr>
          )
        }
        </tbody>
      </Table>
      <label className='font-weight-bold'>Revenue: ${farm.revenue.toLocaleString()}</label>
    </>
  );
};

export default FarmMarkerToolTipComponent;
