import Table from 'react-bootstrap/Table';


const FarmMarkerToolTipComponent = (props) => {
  const { farm } = props;

  return (
    <>
      <label className='font-weight-bold'>{ farm.name }</label>
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
            ([name, field]) =>
              <tr>
                <td>{name}</td>
                <td>{field.crop}</td>
                <td>{field["size (acres)"]}</td>
              </tr>
          )
        }
        </tbody>
      </Table>
    </>
  );
};

export default FarmMarkerToolTipComponent;
